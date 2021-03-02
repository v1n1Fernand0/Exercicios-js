
//como i foi declarado com a palavra reservada let, logo a mesma respeitará o escopo definido. 
const func = []
for(let i = 0; i<10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[2]()
func[8]()