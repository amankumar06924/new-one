import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm your AI interview coach. I can help you prepare for interviews, answer questions about interview techniques, or practice answering common interview questions. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input
    };

    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! For technical interviews, I recommend using the STAR method to structure your responses: Situation, Task, Action, and Result. This helps you provide concrete examples that demonstrate your skills.",
        "Practice makes perfect! I suggest doing at least 2-3 mock interviews before your actual interview. This helps you get comfortable with the format and reduces anxiety.",
        "When discussing your weaknesses, choose something real but not critical to the role. Then, focus on the steps you're taking to improve. This shows self-awareness and growth mindset.",
        "Body language is crucial! Maintain eye contact, sit up straight, and use hand gestures naturally. A warm smile at the beginning can help establish rapport with the interviewer."
      ];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)]
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background p-0 lg:p-4 m-0 ml-0 mr-3 pr-0 mb-0 pb-0 pl-0">
      <div className="w-full h-full m-0 p-0">
        <Card className="border-border bg-card h-[calc(100vh-2rem)]">
          <CardHeader className="border-b border-border">
            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Bot className="h-6 w-6 text-accent" />
              AI Interview Coach
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-[calc(100%-5rem)]">
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8 border-2 border-accent">
                        <AvatarFallback className="bg-accent text-accent-foreground">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === "user"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8 border-2 border-primary">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-6 border-t border-border">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about interview preparation..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSend}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chatbot;
