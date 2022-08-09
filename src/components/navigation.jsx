export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-expand-lg navbar-light navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            React Landing Page
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li className='contact.social'>
              <a href={props.data ? props.data.facebook : '/'}>
              <i className='fa fa-facebook'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
