import express,{Express, Request, Response} from 'express'
const app: Express = express()

app.get("/", async (req: Request, res: Response) => { 
  try { 
    res.status(200).json({"msg": "service-b get"})
  } catch(error) { 
    return res.status(500).json({"error": error})
  }
})

app.post("/", async (req: Request, res: Response) => { 
  try { 
    res.status(200).json({"msg": "successful post to service-b"})
  } catch(error) { 
    return res.status(500).json({"error": error})
  }
})

app.delete("/", async (req: Request, res: Response) => { 
  try { 
    res.status(200).json({"msg": "successful delete to service-b"})
  } catch(error) { 
    return res.status(500).json({"error": error})
  }
})

app.patch("/", async (req: Request, res: Response) => {
  try { 

  } catch(error) { 
    return res.status(500).json({"error": error})
  }
})
app.listen(3031, async () => { 
  console.log('Service-b is listening')
})