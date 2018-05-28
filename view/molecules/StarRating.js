import Icon from '../atoms/Icon'
import Flex from '../atoms/Flex'

export default ({score, maxScore=5}) => {
    let scoreArray = []
    for(let scoreIndex = 0 ; scoreIndex<score ; scoreIndex++){
        scoreArray.push('star')
    }
    for(let noScoreIndex = score ; noScoreIndex < maxScore ; noScoreIndex++){
        scoreArray.push('no star')
    }
return (
    <Flex>
        {scoreArray.map(score=><span>{score} </span>)}
    </Flex>)
}