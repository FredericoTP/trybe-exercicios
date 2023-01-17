import { useState, useEffect } from "react";
import arrayEmails from "./data/emails";
import './App.css';

function App() {
  const [emails, setEmails] = useState(arrayEmails);

  useEffect(() => {
    const allEmailRead = emails.every((item) => item.status === 1);

    if (allEmailRead) {
      alert('Você leu todos os emails!');
    }
  }, [emails])

  const changeEmailStatusRead = (id) => {
    const updateEmail = emails.map((item) => {
      if (item.id === id) {
        return {...item, status: 1}
      }
      return item
    })
    setEmails(updateEmail)
  }

  const changeEmailStatusUnread = (id) => {
    const updateEmail = emails.map((item) => {
      if (item.id === id) {
        return {...item, status: 0}
      }
      return item
    })
    setEmails(updateEmail)
  }

  const changeAllToRead = () => {
    const updateEmails = emails.map((item) => {
      return {...item, status: 1}
    })
    setEmails(updateEmails)
  }

  const changeAllToUnread = () => {
    const updateEmails = emails.map((item) => {
      return {...item, status: 0}
    })
    setEmails(updateEmails)
  }

  return (
    <div>
      <header>
        <h1>TrybeMail</h1>
      </header>
      <div>
        <button type="button" onClick={ () => changeAllToRead() }>Marcar todos como lidos</button>
        <button type="button" onClick={ () => changeAllToUnread() }>Marcar todos como não lidos</button>
      </div>
      <div>
        {emails.map((email) => {
          const {id, tittle, status} = email
          return (
            <div key={ id }>
              <p className={ status === 0 ? "unread" : "read"}>{ tittle }</p>
              <button
                type="button"
                onClick={ () => changeEmailStatusRead(id) }
              >
                Lido
              </button>
              <button
                type="button"
                onClick={ () => changeEmailStatusUnread(id) }
              >
                Não Lido
              </button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
