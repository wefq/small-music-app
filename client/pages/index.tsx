export default function Home() {
  return (
    <>
      <div className='center'>
        <h1>Welcome</h1>
        <h3>Hello Music World</h3>
      </div>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}
