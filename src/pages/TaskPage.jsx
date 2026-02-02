import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    const navigate = useNavigate()
    
  return (
  <div className="h-screen w-screen bg-slate-500 p-6">
    <div className="space-y-4">
        <div className="Flex justify-center align-baseline">
          <button onClick={() => navigate(-1)}  className="absolute mb-6 text-white cursor-pointer">
            <ChevronLeft />
          </button>
          <h1 className="text-slate-100 font-black text-center text-3xl">
            Gerenciador de Tarefas
          </h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
    </div>
  </div>
  )
}

export default TaskPage;
