
//como i foi declarado por var, logo i não respetará o escopo de bloco! Ocasionando os mesmos resultados nas duas impressões.

const func = []
for(var i = 0; i<10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[2]()
func[8]()