import { Check, Loader2 } from "lucide-react";
import { useState } from "react";

import { ThemeProvider } from "@/components/theme-provider";

import { Button } from "./components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { cn } from "./lib/utils";

type WalletRewardProps = {
  name: string;
  description: string;
};
const WalletReward = ({ name, description }: WalletRewardProps) => {
  const [isClaiming, setIsClaiming] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  const handleClaim = () => {
    setIsClaiming(true);
    setTimeout(() => {
      setIsClaiming(false);
      setIsClaimed(true);
    }, 2000);
  };
  return (
    <Card
      className={cn("transition-colors", {
        "border-green-700": isClaimed,
      })}
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          className={cn("w-full transition-colors", {
            "bg-green-700": isClaimed,
          })}
          onClick={handleClaim}
          disabled={isClaiming || isClaimed}
        >
          {isClaiming && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isClaimed && <Check className="mr-2 h-4 w-4" />}
          {!isClaiming && !isClaimed && "Claim reward"}
          {!isClaiming && isClaimed && "Reward claimed!"}
          {isClaiming && "Please wait..."}
        </Button>
      </CardFooter>
    </Card>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col gap-4">
        <WalletReward
          name="Buy One Get One Free (Beer)"
          description="Purchase any two of our beers and get the second one for free"
        />
        <WalletReward
          name="50% off"
          description="50% off all orders over $100"
        />
        <WalletReward
          name="Double points"
          description="Double the points earned for one order"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
