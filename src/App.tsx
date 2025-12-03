import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button className="bg-violet-400 border-3 border-red-500">Click me</Button>
      <Select>
        <SelectTrigger className="w-[100px]">
    <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem className="bg-red-100" value="light">Item 1</SelectItem>
          <SelectItem className="bg-blue-300" value="dark">Item 2</SelectItem>
          <SelectItem className="bg-yellow-900" value="system">Item 3</SelectItem>
        </SelectContent>
      </Select>
      <Card className="w-[300px] shadow-lg border border-gray-200 rounded-xl hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex items-center space-x-4 pb-2 border-b border-gray-100">
          <HoverCard>
            <HoverCardTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="w-40 text-sm text-gray-700">
                Esto es mi hovercard personalizada
              </p>
            </HoverCardContent>
          </HoverCard>
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">Didac Fernandez</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Persona que experimenta
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="py-1 text-gray-700">
          <p>
            Hola tan solo estoy probando una nueva card para mi experimento
          </p>
        </CardContent>

        <CardFooter className="flex justify-between items-center pt-2 border-t border-red-500">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            No me sigas
          </Button>
          <Button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md">
            No envies mensajes
          </Button>
        </CardFooter>
      </Card>
      
    </div>
  )
}
 
export default App
