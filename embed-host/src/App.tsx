import { AlertCircle, ChevronRight } from "lucide-react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";

import { ThemeProvider } from "@/components/theme-provider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

type CartItemProps = {
  name: string;
  price: number;
  quantity: number;
};

const CartItem = ({ name, price, quantity }: CartItemProps) => (
  <div className="flex flex-row justify-between px-4 py-2">
    <div>
      <p className="font-bold">{name}</p>
      <p>${(price * quantity).toFixed(2)}</p>
    </div>
    <div className="flex- flex items-center gap-4">
      <Button className="p-3" variant="outline">
        <FaPlus />
      </Button>
      <p>{quantity}</p>
      <Button className="p-3" variant="outline">
        <FaMinus />
      </Button>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="mx-auto flex min-h-screen max-w-lg flex-col border-x px-4">
        <h2 className="py-4 text-center text-2xl">Order Details</h2>

        <Alert variant="warning">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Hold up!</AlertTitle>
          <AlertDescription>We need a table number</AlertDescription>
        </Alert>

        <Card className="my-4 flex flex-col gap-4">
          <CartItem name="Asahi Super Dry Lager" price={15} quantity={2} />
          <CartItem name="Buffalo Wings (6)" price={12.5} quantity={1} />
        </Card>

        <Card className="mt-auto w-full border-green-700 text-green-700 transition-colors hover:bg-green-950">
          <Sheet>
            <SheetTrigger className="flex w-full flex-row items-center gap-4 p-4">
              <FaTicket className="text-3xl" />
              <p>You have Rewards to claim!</p>
              <ChevronRight className="ml-auto" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Your rewards</SheetTitle>
                <SheetDescription>
                  Review your rewards and apply amazing discounts
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 h-full w-full">
                <iframe
                  src="http://localhost:3001/"
                  className="h-full w-full"
                />
              </div>
            </SheetContent>
          </Sheet>
        </Card>

        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-row justify-between">
            <p>Subtotal</p>
            <p>$27.50</p>
          </div>
          <div className="flex flex-row justify-between text-xl font-bold">
            <p>Total</p>
            <p>$27.50</p>
          </div>
          <Button className="w-full text-lg font-bold">Place Order</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
