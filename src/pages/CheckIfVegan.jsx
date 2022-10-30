
import { memo } from 'react'
import { CheckIngr } from "../cmps/CheckIngr"
import { CheckWines } from "../cmps/CheckIWines"


export const CheckIfVegan = memo(() => {
  return (
    <div className="check-vegan">
      <h1>זה טבעוני אחי?</h1>
      <hr />
      <div className='desc'>
        <p>כמה פעמים עמדתם אומללים מול בקבוק יין לא מוכר וחיפשתם על התווית את המרכיבים כדי לבדוק האם תוכלו להשתכר בארוחת חג?</p>
        <p>מתי שמתם לב שאף פעם המידע הזה לא רשום על התווית ונשארתם סקחים כשהדודה התעקשה להמשיך עם ההגדה עד הסוף?</p>
      </div>
      <hr />
      <div className='desc'>
        <p>כמה פעמים ישבתם עם החבר'ה ואיזה חבר הביא חטיף שאתם מתים לטעום אבל כתוב על האריזה בסינית?</p>
        <p>ואיך היה הבמבה שקניתם בתחנת דלק בסוף הערב ואכלתם לבד באוטו?</p>
      </div>
      <hr />
      <h2>אנחנו פה בשבילכם</h2>
      <div className='inputs'>
        <CheckIngr />
        <CheckWines />
      </div>
    </div>
  )
})



    
   