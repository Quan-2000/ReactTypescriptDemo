import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Validation } from './components/Validation';
import { Button } from './components/Button';
import { Input } from './components/Input';

/*State*/
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { UserUseStateFutureValue } from './components/state/UserUseStateFutureValue';
import { UserUseStateTypeAssertion } from './components/state/UserUseStateTypeAssertion';
import { Counter } from './components/state/Counter';

/*Context*/
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext'
import { UserUseContextFutureValue } from './components/context/UserUseContextFutureValue'
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';

/*Class*/
import { CounterClassComponent } from './components/class/CounterClassComponent';

/*Component Props*/
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'

/*Generic Props*/
import { List } from './components/generics/List'

/*Restricting Props*/
import { RandomNumber } from './components/restriction/RandomNumber';

/*Template Literals and Exclude*/
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';

// import { CustomComponent } from './components/html/CustomComponent';

/*Polymorphic Components*/
import { Text } from './components/polymorphic/Text'

function App() {
  const personName = {
    first: 'Quan',
    last: 'Dao',
  }

  const personList = [
    {
      first: 'Vu',
      last: 'Le',
    },
    {
      first: 'Quang',
      last: 'Bui',
    },
    {
      first: 'Nhat',
      last: 'Huynh',
    },
  ]

  return (
    <div className="App">
      {/* Basic props */}
      <Greet name="Quan Dao" messagesCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} />

      <br></br>

      {/* Advanced props */}
      <Status status='success' />
      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar goes to Will Smith!</Heading>
      </Oscar>

      <Greet name="Quan Dao" messagesCount={20} isLoggedIn={true} />
      <Validation checked={true}></Validation>

      <br></br>

      {/* Event props */}
      <Button 
        handleClick={(event) => {
          console.log('Button clicked!', event)
        }} 
      />
      <Input value='' handleChange={(event) => console.log(event)} />

      <br></br>
      <br></br>

      {/* Style props */}
      <Container styles={{ border: '1px solid black', padding: '1rem'}} />

      <br></br>

      {/* useState Hook */}
      <LoggedIn />

      <br></br>

      {/* useState Future Value */}
      <UserUseStateFutureValue />

      <br></br>

      {/* useState Type Assertion */}
      <UserUseStateTypeAssertion />

      <br></br>

      {/* useReducer Hook */}
      <Counter />

      <br></br>
      <br></br>

      {/* useContext Hook */}
      <Box />

      <br></br>

      {/* useContext Future Value */}
      <UserContextProvider>
        <UserUseContextFutureValue />
      </UserContextProvider>

      <br></br>

      {/* useRef Hook */}
      <DomRef />

      <br></br>
      
      {/* useRef Hook */}
      <MutableRef />

      <br></br>

      {/* Class Component */}
      <CounterClassComponent message='The count value is '/>

      <br></br>

      {/* Component Props */}
      <Private isLoggedIn={true} component={Profile} />

      <br></br>

      {/* Generic Props */}
      {/* <List 
        items={['Batman', 'Superman', 'Wonder Woman']} 
        onClick={(item) => console.log(item)} 
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Vu',
            last: 'Le',
          },
          {
            id: 2,
            first: 'Quang',
            last: 'Bui',
          },
          {
            id: 3,
            first: 'Nhat',
            last: 'Huynh',
          },
        ]}
        onClick={(item) => console.log(item)}
      />

      <br></br>

      {/* Restricting Props */}
      <RandomNumber value={10} isPositive />

      <br></br>

      {/* Template Literals and Exclude */}
      <Toast position='center' />

      <br></br>

      {/* Wrapping HTML Elements */}
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton>

      {/* Extracting a Components Prop Types */}
      {/* <CustomComponent /> */}

      <br></br>

      {/* Polymorphic Components */}
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;

