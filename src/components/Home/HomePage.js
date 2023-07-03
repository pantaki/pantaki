import videoHomepage from '../../assets/videohome.mp4';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const finalSpaceCharacters = [
    {
      id: 'gary',
      name: 'Gary Goodspeed',
      thumb: '/images/gary.png'
    },
    {
      id: 'cato',
      name: 'Little Cato',
      thumb: '/images/cato.png'
    },
    {
      id: 'kvn',
      name: 'KVN',
      thumb: '/images/kvn.png'
    },
    {
      id: 'mooncake',
      name: 'Mooncake',
      thumb: '/images/mooncake.png'
    },
    {
      id: 'quinn',
      name: 'Quinn Ergon',
      thumb: '/images/quinn.png'
    }
  ];

const task_item = [
{
    id: '1',
    name: 'offer / em',
    task_data: [
        {id: '1', name: 'task_done'},
        {id: '2', name: 'task_done'},
        {id: '3', name: 'task_done'},
        {id: '4', name: 'task_done'},
        {id: '5', name: 'task_done'},
        {id: '6', name: 'task_note'},
        
    ],
},
{
    id: '2',
    name: 'inspection',
    task_data: [
        {id: '1', name: 'task_done'},
        {id: '2', name: 'task_done'},
        {id: '3', name: 'task_done'},
        {id: '4', name: 'task_done'},
        {id: '5', name: 'task_done'},
        {id: '6', name: 'task_done'},
        {id: '7', name: 'task_done'},
        
    ],
},
{
    id: '3',
    name: 'financing',
    task_data: [
        {id: '1', name: 'task_done'},
        {id: '2', name: 'task_done'},
        {id: '3', name: 'task_done'},
        {id: '4', name: 'task_note'},
        {id: '5', name: 'task_note'},
    ],
},
{
    id: '4',
    name: 'title work',
    task_data: [
        {id: '1', name: 'task_done'},
        {id: '2', name: 'task_done'},
        {id: '3', name: 'task_done'},
        {id: '4', name: 'task_done'},
        {id: '5', name: 'task_note'},
        {id: '6', name: 'task_waiting'},   
    ],
},
{
    id: '5',
    name: 'closing',
    task_data: [
        {id: '1', name: 'task_done'},
        {id: '2', name: 'task_done'},
        {id: '3', name: 'task_note'},
        {id: '4', name: 'task_waiting'},   
    ],
},
{
    id: '6',
    name: 'extras',
    task_data: [
        {id: '1', name: 'task_done'},
        {id: '2', name: 'task_done'},
        {id: '3', name: 'task_done'},
        {id: '4', name: 'task_done'},   
    ],
},
]
  

const HomePage = (props) => {
const [characters, updateCharacters] = useState(finalSpaceCharacters);
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

//   return (
//     <div className="homepage-container">
        
    
//         <div className="App-home-container">
//             <header className="App-header home-col1">
//                 <h4>Inspection 1</h4>
//                 <DragDropContext onDragEnd={handleOnDragEnd}>
//                     <Droppable droppableId="characters">
//                         {(provided) => (
//                         <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
//                             {characters.map(({id, name, thumb}, index) => {
//                                 return (
//                                     <Draggable key={id} draggableId={id} index={index}>
//                                     {(provided) => (
//                                         <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                                             <div className="characters-thumb">
//                                                 <img src={thumb} alt={`${name} Thumb`} />
//                                             </div>
//                                             <p>
//                                                 { name }
//                                             </p>
//                                         </li>
                                        
//                                     )}
//                                     </Draggable>
//                                 );
//                             })}
//                             {provided.placeholder}
//                         </ul>
//                         )}
//                     </Droppable>
//                 </DragDropContext>
                
//             </header>
            
//         </div>
        
//     </div>
//   );

    return (
        <div className="homepage-container">
            <div className='homepage-content'>
                <div className='homepage-item'>
                    <div className='item-title'>
                        
                            <h5>(B) T&N Lorem orem Ipsum </h5>
                       
                            <span className='item-title-number'>10</span>
                       
                        
                    </div>
                    <div className='item-content'>
                        <div className='item-note'>
                            <div className='item-note-name'>
                                <span className='note-name'>emails</span>
                                <span className='note-number'>3</span>
                                
                            </div>
                            <div className='item-note-name'>
                                <span className='note-name'>wf docs</span>
                                <span className='note-number'>2</span>
                            </div>
                            <div className='item-note-name'>
                                <span className='note-name'>notes</span>
                                <span className='note-number'>2</span>
                                
                            </div>
                        </div>
                        <div className='item-list'>
                        {task_item.map((task_card) => {
                            
                            return (
                                <div className='item-card'>
                                    <span className='item-card-title'>{task_card.name}</span>
                                    <div className='item-card-content'>
                                        {/* <span className='item-task'>{task_card.name}</span> */}
                                    {task_card.task_data.map((task_item) => {
                                        return (
                                            <div className='item-task' >
                                                <span className={task_item.name}></span>
                                            </div>
                                        )
                                        
                                    })}
                                        
                                    </div>
                                </div>
                            )
                            })

                        }
                            
                           
                          
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;