package com.example.hw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.hw.service.CreatorService;

import java.util.Map;

@RestController
public class CreatorController {

    @Autowired
    private CreatorService creatorService;

    @PostMapping("/creator/generate")
    public String generate(@RequestBody Map<String, Object> payload) {
        return creatorService.generate(payload);
    }
}
