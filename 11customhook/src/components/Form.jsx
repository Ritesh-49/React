import useFormInput from '../hooks/useFormInput';

export default function Form() {
  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Poppins');

  return (
    <>
      <div className='flex flex-col mt-4'>
        <label>
          First name:
          <input {...firstNameProps} style={{
            border: '1px solid black',
            padding: '4px',
            borderRadius: '4px'
          }} />
        </label>
        <label>
          Last name:
          <input {...lastNameProps} />
        </label>
      </div>

      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  );
}
