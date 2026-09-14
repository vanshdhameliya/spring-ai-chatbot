package tech.logicforge.chatbot.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.logicforge.chatbot.service.WebsiteBuilderService;

@RestController
@RequestMapping("/website")
public class WebsiteBuilderController {
    private final WebsiteBuilderService websiteService;

    public WebsiteBuilderController(WebsiteBuilderService websiteService) {
        this.websiteService = websiteService;
    }

    @PostMapping
    public String generateWebsite(@RequestBody String message) {
        return websiteService.generate(message);
    }
}
