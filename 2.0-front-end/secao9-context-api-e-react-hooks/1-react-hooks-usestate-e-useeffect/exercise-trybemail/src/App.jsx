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
    <div className="content">
      <header className="header">
        <h1>TrybeMail</h1>
      </header>
      <div className="buttons-all">
        <button className="buttons" type="button" onClick={ () => changeAllToRead() }>Marcar todos como lidos</button>
        <button className="buttons" type="button" onClick={ () => changeAllToUnread() }>Marcar todos como não lidos</button>
      </div>
      <div className="emails-content">
        {emails.map((email) => {
          const {id, tittle, status} = email
          return (
            <div className="email" key={ id }>
              <p className={ status === 0 ? "unread" : "read"}>{ tittle }</p>
              <div>
                <button
                  className="buttons"
                  type="button"
                  onClick={ () => changeEmailStatusRead(id) }
                >
                  Lido
                </button>
                <button
                  className="buttons"
                  type="button"
                  onClick={ () => changeEmailStatusUnread(id) }
                >
                  Não Lido
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
