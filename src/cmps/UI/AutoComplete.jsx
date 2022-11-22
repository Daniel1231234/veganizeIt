// import { ReactSearchAutocomplete } from 'react-search-autocomplete'



// export const AutoComplete = (props) => {



//   const handleOnSearch = (string, results) => {
//     // onSearch will have as the first callback parameter
//     // the string searched and for the second the results.
//     console.log(string, results)
//     props.handleInputVal(string)
//   }
  
//   const handleOnHover = (result) => {
//     // the item hovered
//     // console.log(result)
//   }
  
//   const handleOnSelect = (item) => {
//     props.handleInputVal(item)
//     // the item selected
//     // console.log(item)
//   }

//   const handleOnFocus = () => {
//     // console.log('Focused')
//   }

//   const formatResult = (item) => {
//     return (
//       <>
//         <span style={{ display: 'block', textAlign: 'left', zIndex: '10' }}>{item.name}</span>
//       </>
//     )
//   }

//   return (
//         <div style={{ }}>
//           <ReactSearchAutocomplete
//             items={props.items}
//             onSearch={handleOnSearch}
//             onHover={handleOnHover}
//             onSelect={handleOnSelect}
//             onFocus={handleOnFocus}
//             autoFocus
//             formatResult={formatResult}
//             placeholder={props.placeholder}
//           />
//         </div>
//   )
// }
