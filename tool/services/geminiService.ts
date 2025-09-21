
import { GoogleGenAI, Modality, GenerateContentResponse } from "@google/genai";
import { ImageVariationResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateImageFromText = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: `전문 사진작가가 찍은 것처럼, 초현실적이고 상세하며, 시네마틱한 스타일로 다음을 그려줘: ${prompt}`,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '1:1',
            },
        });
        
        if (response.generatedImages && response.generatedImages.length > 0) {
            return response.generatedImages[0].image.imageBytes;
        } else {
            throw new Error("이미지 생성에 실패했습니다. 응답에 이미지가 없습니다.");
        }
    } catch (error) {
        console.error("Error generating image:", error);
        throw new Error("이미지 생성 중 오류가 발생했습니다.");
    }
};

export const getPromptFromImage = async (base64Image: string, mimeType: string): Promise<string> => {
    try {
        const imagePart = {
            inlineData: {
                data: base64Image,
                mimeType: mimeType,
            },
        };
        const textPart = {
            text: `Analyze the uploaded image and generate a structured, block-style prompt suitable for an AI image generator like Midjourney.
The output must be only the prompt itself, with no additional text, explanation, or conversational filler. Each attribute must be on a new line.

Follow the format of these examples:

**Example 1: Character**
STYLE: cinematic dark fantasy 3D render creature design;
MEDIUM: hyperrealistic 3D render;
CHARACTER: magical shadow soldier knight;
CAMERA: full shot eye level;
GAZE: no visible eyes forward facing;
BODY_TYPE: humanoid shape made of shadow and energy;
FACE_SHAPE: faceless helmeted head;
FACIAL_FEATURES: glowing purple eyes visible through helmet slit;
SKIN: solidified black shadow with wispy edges;
EXPRESSION: menacing loyal unwavering;
CLOTHING: dark medieval full plate armor glowing purple accents;
ACCESSORIES: purple energy lines coursing through armor;
PROPS: holding a shadow longsword;
POSE: standing at attention battle-ready stance;
BACKGROUND: S-rank dungeon blurred background;
LIGHTING: dramatic internal purple glow;
QUALITY: cinematic ultra detailed concept art;
PARAMETERS: --ar 16:9 --v 7

**Example 2: Environment**
STYLE: cinematic dark fantasy 3D render environment design;
MEDIUM: hyperrealistic 3D render;
CAMERA: wide shot low angle establishing shot;
SCENE: vast and ancient giant's throne hall inside a colossal underground cavern;
CAMERA_EFFECTS: atmospheric fog volumetric lighting lens flare;
LOCATION: ancient throne hall in a giant cave;
LOCATION_DETAIL: colossal stone pillars giant skeletons scattered across the floor glowing crystals embedded in walls;
TIME_LIGHTING: no natural light cavernous darkness;
ARTIFICIAL_LIGHT: glowing purple and blue crystals on the walls and ceiling;
LIGHTING_TECHNIQUE: dramatic chiaroscuro high contrast lighting;
ATMOSPHERE: ominous ancient epic mysterious and dangerous;
FOREGROUND: uneven rocky ground monster corpses;
BACKGROUND: endless cavern fading into darkness the giant's throne in the distance;
COLOR_TONE: deep blacks cool blues and glowing purples;
QUALITY: cinematic ultra detailed epic fantasy environment;
PARAMETERS: --ar 16:9 --v 7

**Example 3: Character Sheet**
STYLE: cinematic dark fantasy 3D render creature character sheet;
MEDIUM: hyperrealistic 3D render;
CHARACTER: colossal humanoid monster dungeon boss;
CAMERA: full body shots various angles (front, side, back) for character sheet presentation;
GAZE: consistent menacing expression for character sheet;
CHARACTER_SHEET: detailed character sheet showing the monster's full anatomy and armor from multiple angles;
BODY_TYPE: massive muscular build 50 meters tall;
HAIR: no hair rocky protrusions on head;
FACE_SHAPE: brutish heavy jaw;
FACIAL_FEATURES: glowing red eyes large fangs horns;
SKIN: rock-like gray skin covered in cracks and moss;
EXPRESSION: roaring aggressively enraged;
CLOTHING: wearing crude iron and bone armor;
ACCESSORIES: heavy chains on wrists skull pauldrons;
PROPS: wielding a colossal stone club (shown separately or held);
POSE: multiple poses for character sheet, including a roaring stance and a neutral standing pose;
BACKGROUND: pure white studio background for character sheet;
LIGHTING: even studio lighting to clearly show details, with subtle shadows to define its form;
QUALITY: cinematic ultra detailed epic monster design, production quality character sheet;
PARAMETERS: --ar 16:9 --v 7

Now, generate a prompt for the provided image in the same format.`
        };

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
        });

        return response.text;
    } catch (error) {
        console.error("Error extracting prompt:", error);
        throw new Error("프롬프트 추출 중 오류가 발생했습니다.");
    }
};


export const generateImageVariation = async (base64Image: string, mimeType: string, prompt: string): Promise<ImageVariationResult> => {
    try {
        const imagePart = {
            inlineData: {
                data: base64Image,
                mimeType: mimeType,
            },
        };
        const textPart = {
            // Changed instruction to English for better model stability
            text: `Apply a creative variation to this image based on the following instruction: "${prompt}"`,
        };

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image-preview',
            contents: {
                parts: [imagePart, textPart],
            },
            config: {
                responseModalities: [Modality.IMAGE, Modality.TEXT],
            },
        });
        
        // Add robust response validation
        if (!response.candidates || response.candidates.length === 0 || !response.candidates[0].content || !response.candidates[0].content.parts) {
            console.error("Invalid response structure from Gemini API:", JSON.stringify(response, null, 2));
            if (response.promptFeedback?.blockReason) {
                throw new Error(`요청이 안전상의 이유로 차단되었습니다: ${response.promptFeedback.blockReason}`);
            }
            throw new Error("이미지 변형 생성에 실패했습니다. API로부터 유효하지 않은 응답을 받았습니다.");
        }

        let newImageBase64: string | null = null;
        let newDescription: string | null = null;

        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData?.data) {
                newImageBase64 = part.inlineData.data;
            } else if (part.text) {
                newDescription = part.text;
            }
        }

        if (newImageBase64) {
            return { image: newImageBase64, description: newDescription ?? "이미지 변형이 생성되었습니다." };
        } else {
            const textResponse = response.candidates[0].content.parts.find(p => p.text)?.text;
            if (textResponse) {
                console.warn("Image variation did not return an image. Text response:", textResponse);
                throw new Error(`이미지 변형 생성에 실패했습니다. 모델 응답: ${textResponse}`);
            }
            throw new Error("이미지 변형 생성에 실패했습니다. 응답에 이미지가 없습니다.");
        }

    } catch (error) {
        console.error("Error generating image variation:", error);
        if (error instanceof Error && (error.message.startsWith("요청이 안전상의 이유로 차단되었습니다:") || error.message.startsWith("이미지 변형 생성에 실패했습니다."))) {
           throw error;
        }
        throw new Error("이미지 변형 중 오류가 발생했습니다.");
    }
};

export const generateVideoPrompt = async (prompt: string): Promise<string> => {
    try {
        const instruction = `You are an expert prompt engineer for a text-to-video AI model called "Veo 3". Your task is to take a simple user idea and convert it into a detailed, structured JSON prompt that the Veo 3 model can understand perfectly.

The output MUST be a single, valid JSON object and nothing else. Do not wrap it in markdown \`\`\`json ... \`\`\`.

Here is an example of the required JSON structure and quality:
{
  "core_module": {
    "character": {
      "char_03_boss": {
        "id": "Boss",
        "signature_details": "Korean male bank robber in his 40s, plump physique, clumsy pink mask.",
        "voice_consistency": "mid-low, annoyed, urgent, Seoul accent"
      }
    },
    "location_baseline": {
      "setting": "bank executive office",
      "architecture": "large mahogany desk, leather executive chair",
      "color_palette": "warm wood tones, deep greens, leather browns"
    },
    "project_style": {
      "visual_style": "Stylized 3D character art in Pixar style, cinematic, detailed render."
    }
  },
  "video_module": {
    "metadata": {
      "prompt_name": "S03.01-single-01_boss_yells",
      "duration_seconds": 5
    },
    "global": {
      "description": "In an executive office, the bank robber boss, his face contorted in comical rage behind a pink mask, slams a phone down and yells an order in frustration.",
      "style": "Pixar-style 3D animation, anxious, angry"
    },
    "sequence": [
      {
        "timestamp": "00:00-00:05",
        "motion": "The boss's face, with an exaggerated angry expression, fills the frame as he yells.",
        "camera": "Static close-up on the boss's face.",
        "audio": [
          {
            "type": "dialogue",
            "character": "Boss",
            "line": "'야! 아이파이 좀 잡아와! (Ya! aipai jom jabawa!)'",
            "emotion": "Anger"
          }
        ]
      }
    ],
    "negative_prompts": [
      "calm expression",
      "happy"
    ]
  }
}

Now, based on the user's input, create a similar JSON prompt.
User Input: "${prompt}"`;

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: instruction,
            config: {
                responseMimeType: "application/json",
            }
        });

        const jsonString = response.text;
        try {
            const parsedJson = JSON.parse(jsonString);
            return JSON.stringify(parsedJson, null, 2);
        } catch (e) {
            console.error("Failed to parse JSON from model response:", jsonString);
            return jsonString;
        }

    } catch (error) {
        console.error("Error generating video prompt:", error);
        throw new Error("영상 프롬프트 생성 중 오류가 발생했습니다.");
    }
};
