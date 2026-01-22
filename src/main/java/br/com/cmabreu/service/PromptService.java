package br.com.cmabreu.service;

import java.net.URI;
import org.json.JSONArray;
import org.json.JSONObject;

import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;

@Service
public class PromptService {

    private final String ollamaAddress = "http://localhost:11434";
    private final String ollamaModel = "reefer/monicacodestral22b:latest";

    public String sendPrompt(String prompt) {
        JSONArray messages = new JSONArray()
            .put(
                new JSONObject()
                    .put("role", "system")
                    .put("content", "You are a helpful assistant.")
            )
            .put(
                new JSONObject()
                    .put("role", "user")
                    .put("content", prompt)
            );

        JSONObject ollamaPayload = new JSONObject()
                .put("model", ollamaModel)
                .put("stream", false)
                .put("messages", messages);

        try {
            RequestEntity<String> requestEntity = RequestEntity
                    .post(new URI(ollamaAddress + "/api/chat"))
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(ollamaPayload.toString());
            RestTemplate restTemplate = new RestTemplate();
            String responseBody = restTemplate.exchange(requestEntity, String.class).getBody();
            
            JSONObject responseJson = new JSONObject(responseBody);
            JSONObject message = responseJson.getJSONObject("message");
            return message.getString("content");

        } catch (ResourceAccessException e) {
            System.err.println("Error connecting to the Ollama service: " + e.getMessage());
            return "The local Ollama service is currently unavailable. Please ensure it is running.";
        } catch (Exception e) {
            System.err.println("An error occurred while processing the Ollama response: " + e.getMessage());
            e.printStackTrace();
            return "An error occurred while communicating with the Ollama service.";
        }
    }

 
}
