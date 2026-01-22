package br.com.cmabreu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class CreatorService {

    @Autowired
    private PromptService promptService;

    @SuppressWarnings("unchecked")
    private List<String> getListFromPayload(Map<String, Object> payload, String key) {
        Object value = payload.get(key);
        if (value instanceof List) {
            return (List<String>) value;
        }
        return List.of(); // Return an empty list if not a list or is null
    }

    public String generate(Map<String, Object> payload) {
        String scene = (String) payload.get("scene");
        List<String> style = getListFromPayload(payload, "style");
        boolean isNsfw = (boolean) payload.get("isNsfw"); // Will always be true now

        String refinedScene = generateCaptionAndCharacter(scene, style, isNsfw);
        String actionDescription = generateActionDescription(refinedScene, getListFromPayload(payload, "protagonistAction"), isNsfw);
        return generateFinalPrompts(actionDescription, getListFromPayload(payload, "cameraAngle"), getListFromPayload(payload, "cameraMovement"), getListFromPayload(payload, "lighting"), isNsfw, getListFromPayload(payload, "cameraDevice"));
    }

    private String generateCaptionAndCharacter(String scene, List<String> style, boolean isNsfw) {
        String styleString = style.stream().collect(Collectors.joining(", "));
        // No need to check isNsfw or add nsfwStyle separately as it's now part of the main style list
        String prompt = "Based on the following scene description, create a more detailed and evocative version of the scene, including a detailed description of the main character.\n\n" +
                "Scene: " + scene + "\n" +
                "Style: " + styleString + "\n\n" +
                "Generate a single, cohesive paragraph that vividly describes the scene and the character within it. The character description should include details about their appearance, clothing, and mood. The overall tone should be consistent with the specified style.";

        return promptService.sendPrompt(prompt);
    }

    private String generateActionDescription(String refinedScene, List<String> protagonistAction, boolean isNsfw) {
        String actionString = protagonistAction.stream().collect(Collectors.joining(", "));
        String prompt = "Given the following scene and character description, describe the action that is taking place.\n\n" +
                "Scene and Character: " + refinedScene + "\n" +
                "Action: " + actionString + "\n\n" +
                "Generate a single, cohesive paragraph that describes the character performing the specified action within the scene. The description should be dynamic and engaging, and the tone should be consistent with the scene's style.";

        return promptService.sendPrompt(prompt);
    }

    private String generateFinalPrompts(String actionDescription, List<String> cameraAngle, List<String> cameraMovement, List<String> lighting, boolean isNsfw, List<String> cameraDevice) {
        String cameraAngleString = cameraAngle.stream().collect(Collectors.joining(", "));
        String cameraMovementString = cameraMovement.stream().collect(Collectors.joining(", "));
        String lightingString = lighting.stream().collect(Collectors.joining(", "));
        String cameraDeviceString = cameraDevice.stream().collect(Collectors.joining(", "));

        String prompt = "Based on the following action description, create a final, detailed prompt for an image-to-video AI model. The prompt should include details about the camera work and lighting.\n\n" +
                "Action Description: " + actionDescription + "\n" +
                "Camera Angle: " + cameraAngleString + "\n" +
                "Camera Movement: " + cameraMovementString + "\n" +
                "Lighting: " + lightingString + "\n" +
                "Camera/Device: " + cameraDeviceString + "\n\n" +
                "Generate a single, comprehensive prompt that includes all of these elements in a clear and concise manner. The prompt should be ready to be used with a video generation model. The final output must be only a single prompt, do not add any extra text or explanation. Your final answer must be a single block of text.";

        return promptService.sendPrompt(prompt);
    }
}
