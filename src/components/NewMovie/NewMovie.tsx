import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

export const NewMovie = ({onAdd}: {onAdd: (movie: Movie) => void}) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({ title: '', description: '', imgUrl: '', imdbUrl: '', imdbId: '' })
  const isFormValid = Boolean(form.title && form.title.trim() && form.imgUrl && form.imgUrl.trim() && form.imdbUrl && form.imdbUrl.trim() && form.imdbId && form.imdbId.trim());
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    const movie = { title: form.title.trim(), description: form.description.trim(), imgUrl: form.imgUrl.trim(), imdbUrl: form.imdbUrl.trim(), imdbId: form.imdbId.trim() };
    onAdd(movie);
    setCount(c => c + 1);
    setForm({title: '', description: '', imgUrl: '', imdbUrl: '', imdbId: ''});
  }

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={handleSubmit}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={form.title}
        onChange={(value: string) => setForm(prev => ({...prev, title: value}))}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={form.description}
        onChange={(value: string) => setForm(prev => ({...prev, description: value}))}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={form.imgUrl}
        onChange={(value: string) => setForm(prev => ({...prev, imgUrl: value}))}
        required />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={form.imdbUrl}
        onChange={(value: string) => setForm(prev => ({...prev, imdbUrl: value}))}
        required />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={form.imdbId}
        onChange={(value: string) => setForm(prev => ({...prev, imdbId: value}))}
        required />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isFormValid}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
