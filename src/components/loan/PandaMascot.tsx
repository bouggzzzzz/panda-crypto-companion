interface PandaMascotProps {
  state: "idle" | "thinking" | "happy" | "error";
}

export const PandaMascot = ({ state }: PandaMascotProps) => {
  const expressions = {
    idle: "🐼",
    thinking: "🤔",
    happy: "🐼✨",
    error: "😅",
  };

  const messages = {
    idle: "Hi! Let's calculate your loan rate!",
    thinking: "Crunching the numbers...",
    happy: "Here's your personalized rate!",
    error: "Oops! Please check your inputs.",
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className={`text-4xl ${state === "thinking" ? "animate-bounce-slight" : "animate-float"}`}>
        {expressions[state]}
      </div>
      <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium animate-float">
        {messages[state]}
      </div>
    </div>
  );
};