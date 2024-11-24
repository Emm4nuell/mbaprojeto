import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function HomePage(){
    return(
        <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-md w-full">
          <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
            LOGIN
          </h1>
          <form>
            <div className="mb-4">
              <Label htmlFor="email" className="block text-lg font-medium text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Digite seu email"
              />
            </div>
  
            <div className="mb-6">
              <Label htmlFor="password" className="block text-lg font-medium text-gray-300">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                className="mt-2 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Digite sua senha"
              />
            </div>
  
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-400 text-sm">Lembrar-me</span>
              </div>
              <a href="#" className="text-purple-600 text-sm hover:underline">
                Esqueceu a senha?
              </a>
            </div>
  
            <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    );
}