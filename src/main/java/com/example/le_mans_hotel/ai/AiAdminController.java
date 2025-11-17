package com.example.le_mans_hotel.ai;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai/admin")
@CrossOrigin("*")
public class AiAdminController {

    private final AiService aiService;

    public AiAdminController(AiService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/chat")
    public String adminChat(@RequestBody AiRequest request) {

        String adminPrompt =
                "You are Hotel Admin AI Assistant. "
              + "You must ONLY answer hotel management, admin, technical, booking analytics, "
              + "Spring Boot errors, SQL queries, revenue analysis, occupancy prediction. "
              + "NEVER answer normal user questions. "
              + "Admin asked: " + request.getPrompt();

        return aiService.askAi(adminPrompt);
    }
}