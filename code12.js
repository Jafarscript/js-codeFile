const whatRelation = (percentSharedDNA) =>{
    if(percentSharedDNA == 100){
        return 'You are likely identical twins.'
    }else if(percentSharedDNA >= 35 && percentSharedDNA <= 99){
        return 'You are likely parent and child or full siblings.'
    }else if(percentSharedDNA >= 14 && percentSharedDNA <= 34){
        return 'You are likely grandparent and grandchild, aunt/uncle and nice/nephew, or half siblings.'
    }else if(percentSharedDNA >= 6 && percentSharedDNA <= 13){
        return 'You are likely 1st cousins.'
    }else if(percentSharedDNA >= 3 && percentSharedDNA <= 5){
        return 'You are likely 2nd cousins.'
    }else if(percentSharedDNA >= 1 && percentSharedDNA <= 2){
        return 'You are likely 3rd cousins.'
    }else if(percentSharedDNA == 0){
        return 'You are likely not related.'
    }else{
        return 'not recongnize'
    }
}

console.log(whatRelation(10))