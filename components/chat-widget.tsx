"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";

export default function ChatWidget() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[400px] shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between bg-white border-b p-3">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-square text-primary mr-2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <div>
            <h3 className="font-semibold text-secondary">
              AI Registration Assistant
            </h3>
            <p className="text-xs text-gray-500">Online & ready to help</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px] overflow-y-auto p-3">
          {messages.length === 0 ? (
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex">
                <span className="mr-2 text-yellow-500">👋</span>
                <p className="text-sm">
                  Hello! I&apos;m your AI assistant for company registration.
                  I&apos;ll help you register your Private Limited company step
                  by step. Shall we get started?
                </p>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg text-sm ${
                    message.role === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t p-2">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow text-sm"
          />
          <Button type="submit" size="sm">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}