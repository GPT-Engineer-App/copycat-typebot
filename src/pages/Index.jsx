import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl mx-auto text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Typebot.io Clone</h1>
        <p className="text-lg text-gray-700">Create interactive chatbots with ease.</p>
      </header>
      <main className="w-full max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" />
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;