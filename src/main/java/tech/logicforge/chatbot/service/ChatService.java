package tech.logicforge.chatbot.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.stereotype.Service;
import tech.logicforge.chatbot.aitools.CalculatorTool;
import tech.logicforge.chatbot.aitools.CurrencyExchangeTool;
import tech.logicforge.chatbot.aitools.WeatherTool;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {

    private final ChatClient chatClient;
    private final CalculatorTool calculatorTool;
    private final CurrencyExchangeTool currencyExchangeTool;
    private final WeatherTool weatherTool;

    private final List<Message> history = new ArrayList<>();

    public ChatService(ChatClient.Builder builder,
                       CalculatorTool calculatorTool,
                       CurrencyExchangeTool currencyExchangeTool,
                       WeatherTool weatherTool) {
        this.chatClient = builder.build();
        this.calculatorTool = calculatorTool;
        this.currencyExchangeTool = currencyExchangeTool;
        this.weatherTool = weatherTool;
    }

    private static final String SYSTEM_PROMPT = """
            You are a helpful AI assistant with access to external tools.
            
            Follow these rules:
            1. For arithmetic calculations, ALWAYS use the calculator tool.
            2. For current weather, ALWAYS use the currentWeather tool.
            3. For currency conversion or exchange rates, ALWAYS use the converter tool.
            4. You may call multiple tools when solving a multi-step request.
            5. After receiving tool results, explain the answer naturally.
            6. Never invent current weather or exchange-rate information.
            """;

    public String chat(String message) {

        // USER role
        history.add(new UserMessage(message));

        // SYSTEM + Conversation History
        String response = chatClient.prompt()
                .system(SYSTEM_PROMPT)
                .messages(history)
                .tools(
                        calculatorTool,
                        weatherTool,
                        currencyExchangeTool
                )
                .call()
                .content();

        // ASSISTANT role
        history.add(new AssistantMessage(response));

        return response;
    }

    public void clearHistory() {
        history.clear();
    }
}
