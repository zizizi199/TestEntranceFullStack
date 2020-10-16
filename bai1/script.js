// cau 1
let A=[1,2,'a'];
let B=[1,3,'b'];
function solve(a,b){
    let c=[];
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i] == b[j]){
                a.splice(i,1)
                b.splice(j,1)
                
                
            }
            
        }
        
    }
    c=a.concat(b)
    console.log(c);
}

solve(A,B);
// câu 2

let teams =[
    {
        name:'Team1',
        points:25,
        GD:11,
    },
    {
        name:'Team2',
        points:35,
        GD:11,
    },
    {
        name:'Team3',
        points:25,
        GD:9,
    },
    {
        name:'Team4',
        points:45,
        GD:11,
    },
    {
        name:'Team5',
        points:25,
        GD:11,
    },
]

function solve2(team){
    for(let i=0;i<team.length;i++){
        for(let j=i+1;j<team.length;j++){
            if(team[i].points===team[j].points){
                if(team[i].GD<team[j].point){
                    let temp =team[i];
                    team[i]=team[j];
                    team[j]=temp;
                }
            }else if(team[i].points < team[j].points){
                let temp =team[i];
                team[i]=team[j];
                team[j]=temp;
            }
        }
        
    }
    let i=1;
    team.forEach(x => {
        x.position = i;
        i++
    });
    console.log(team)
}

solve2(teams);