import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PhoneOff, Mic, MicOff, Video, VideoOff } from "lucide-react";

const InterviewRoom = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState("00:00");

  const handleEndInterview = () => {
    navigate("/profile");
  };

  return (
    <div className="h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Interview Session
            </h1>
            <p className="text-muted-foreground">
              Software Engineering Interview
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge
              variant="secondary"
              className="bg-accent/10 text-accent border-accent/20 text-lg px-4 py-2"
            >
              {timeElapsed}
            </Badge>
            <Button
              variant="destructive"
              onClick={handleEndInterview}
              className="gap-2"
            >
              <PhoneOff className="h-4 w-4" />
              End Interview
            </Button>
          </div>
        </div>

        {/* Main Content */}
        {/* Main Content */}
        <div className="flex h-[calc(100vh-160px)]">
          {/* Left Side - Videos */}
          <div className="w-1/4 border border-[e6e9ef] h-[95%] rounded-md ">
            {/* Interviewer Video */}
            <Card className="border-border bg-card h-1/3  mb-1">
              <CardContent className="p-4 h-full">
                <div className="relative h-full bg-primary/10 rounded-lg overflow-hidden flex items-center justify-center">
                  <Avatar className="h-32 w-32 border-4 border-accent">
                    {/* <AvatarImage src="/placeholder.svg" /> */}
                    <AvatarFallback className="bg-accent text-accent-foreground text-4xl">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-1 left-2">
                    <Badge className="bg-primary text-primary-foreground">
                      Alex Chen
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Video */}
            <Card className="border-border bg-card h-1/3">
              <CardContent className="p-4 h-full">
                <div className="relative h-full bg-primary/10 rounded-lg overflow-hidden flex items-center justify-center">
                  {isVideoOff ? (
                    <div className="text-center space-y-2">
                      <VideoOff className="h-16 w-16 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">
                        Camera Off
                      </p>
                    </div>
                  ) : (
                    <Avatar className="h-24 w-24 border-4 border-primary">
                      {/* <AvatarImage src="/placeholder.svg" /> */}
                      <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                        HO
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      You
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Controls */}
            {/* <div className="flex justify-center gap-3 pt-2">
              <Button
                size="lg"
                variant={isMuted ? "destructive" : "secondary"}
                onClick={() => setIsMuted(!isMuted)}
                className="rounded-full h-14 w-14"
              >
                {isMuted ? (
                  <MicOff className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
              </Button>
              <Button
                size="lg"
                variant={isVideoOff ? "destructive" : "secondary"}
                onClick={() => setIsVideoOff(!isVideoOff)}
                className="rounded-full h-14 w-14"
              >
                {isVideoOff ? (
                  <VideoOff className="h-5 w-5" />
                ) : (
                  <Video className="h-5 w-5" />
                )}
              </Button>
            </div> */}
          </div>

          {/* Notes Section - Full Height */}
          <Card className="w-full h-[95%]">
            <CardContent className="p-2 h-full flex flex-col relative">
              <div className="flex flex-row  m-0 p-0">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Interview Notes
                </h3>
                <button className=" w-16 h-8 bg-green-500 rounded-sm relative m-0 p-0 left-[77%]">
                  Submit
                </button>
              </div>
              <Textarea
                placeholder="Take notes during your interview..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="flex-1 resize-none"
              />
              <div className="mt-4 space-y-2">
                {/* <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
          <p className="text-sm font-medium text-accent">Current Question:</p>
          <p className="text-sm text-foreground mt-1">
            Tell me about a time when you had to work with a difficult team member.
          </p>
        </div> */}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center gap-3 pt-2 border border-[e6e9ef] relative bottom-10 rounded-md m-0 pb-1 bg-slate-600">
          <Button
            size="lg"
            variant={isMuted ? "destructive" : "secondary"}
            onClick={() => setIsMuted(!isMuted)}
            className="rounded-full h-14 w-14"
          >
            {isMuted ? (
              <MicOff className="h-5 w-5" />
            ) : (
              <Mic className="h-5 w-5" />
            )}
          </Button>
          <Button
            size="lg"
            variant={isVideoOff ? "destructive" : "secondary"}
            onClick={() => setIsVideoOff(!isVideoOff)}
            className="rounded-full h-14 w-14"
          >
            {isVideoOff ? (
              <VideoOff className="h-5 w-5" />
            ) : (
              <Video className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewRoom;
