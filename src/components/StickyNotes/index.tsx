import { For } from "million/react";
import { useContext } from "react";
import NotesContext from "../../hooks/notesContext";
import { Container, Grid, NoteItem } from "./styles";

export function StickyNotes() {
  const { notes } = useContext<any>(NotesContext);
  return (
    <Container>
      <div className="reminderTitle">
        <h1>Lembretes - {notes.length}</h1>
      </div>
      <Grid>
        <div>
        {
          notes.map((note: any) => (
          <NoteItem>
            
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            
          </NoteItem>
          ))
        }
        </div>
      </Grid>
    </Container>
  );
}