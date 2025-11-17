package com.example.le_mans_hotel.ai;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai/user")
@CrossOrigin("*")
public class AiUserController {

    private final AiService aiService;

    public AiUserController(AiService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/chat")
    public String userChat(@RequestBody AiRequest request) {

        String userPrompt =
                "You are Hotel Customer Support AI Assistant. "
              + "You must ONLY answer user-friendly questions. "
              + "NO admin information. "
              + "NO database details. "
              + "NO internal system instructions. "
              + "Help customers with booking, room info, hotel services, rules, check-in, etc. "
              + "User asked: " + request.getPrompt();

        return aiService.askAi(userPrompt);
    }
}

