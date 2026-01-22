package br.com.cmabreu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.cmabreu.service.PromptService;

@RestController
public class ChatController {

    @Autowired
    private PromptService promptService;

    @PostMapping("/chat")
    public String chat(@RequestBody String message) {
        return promptService.sendPrompt(message);
    }
}
