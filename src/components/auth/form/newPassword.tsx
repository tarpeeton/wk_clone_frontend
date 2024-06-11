import  { FC, useState } from 'react';
import { NavLink } from 'react-router-dom'

const NewPassword: FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordsMatch = password === confirmPassword;
  console.warn( passwordsMatch)

  return (
    <div className='RegisterContent min-h-screen w-full flex content-center items-center'>
      <div className='flex flex-col mx-auto'>
        <div className='bg-zinc-900 maxWith360 mx-auto p-7 rounded-xl relative'>
          <div className='absolute top-4 left-1 w-12 h-12 flex items-start justify-center'>
            <div className='vkc__ContentHeader__navigationIconWrapper NavigateButton'>
              <button>
                <svg width='28' height='28' xmlns='http://www.w3.org/2000/svg'>
                  <g fill='none' fillRule='evenodd'>
                    <path d='M28 0H0v28h28z'></path>
                    <path
                      d='M12.293 6.293a1 1 0 011.414 1.414L8.414 13H22a1 1 0 01.993.883L23 14a1 1 0 01-1 1H8.414l5.293 5.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-7-7-.073-.082A1.005 1.005 0 015 14l.004.09A1.006 1.006 0 015 14.02V14a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09c.025-.031.051-.062.08-.09z'
                      fill='currentColor'
                      fillRule='nonzero'
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          {/*  FORM */}
          <div className='text-white text-xl font-medium mb-2 text-center'>
            <h2>Придумайте пароль</h2>
          </div>
          <div className='QrInfo mb-6'>
            <h4>
              <span>Чтобы защитить ваш аккаунт, придумайте надёжный пароль</span>
            </h4>
          </div>
          <div className='max-w-sm'>
            <div className='relative '>
              <input
                id='hs-toggle-password'
                type={showPassword ? 'text' : 'password'}
                className='inputForm w-full h-9 border-none rounded-lg outline-none pt-2 pb-2 px-3 text-white mb-3 cursor-text'
                placeholder='Введите пароль'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute top-0 right-0 p-3 rounded-e-md'
              >
                <svg
                  className='flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path
                    className={showPassword ? 'hidden' : 'block'}
                    d='M9.88 9.88a3 3 0 1 0 4.24 4.24'
                  ></path>
                  <path
                    className={showPassword ? 'hidden' : 'block'}
                    d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'
                  ></path>
                  <path
                    className={showPassword ? 'hidden' : 'block'}
                    d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'
                  ></path>
                  <line
                    className={showPassword ? 'hidden' : 'block'}
                    x1='2'
                    x2='22'
                    y1='2'
                    y2='22'
                  ></line>
                  <path
                    className={showPassword ? 'block' : 'hidden'}
                    d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'
                  ></path>
                  <circle
                    className={showPassword ? 'block' : 'hidden'}
                    cx='12'
                    cy='12'
                    r='3'
                  ></circle>
                </svg>
              </button>
            </div>

            <div className='relative mb-4'>
              <input
                id='hs-toggle-confirm-password'
                type={showPassword ? 'text' : 'password'}
                className='inputForm w-full h-9 border-none rounded-lg outline-none pt-2 pb-2 px-3 text-white mb-3 cursor-text'
                placeholder='Подтвердите пароль'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute top-0 right-0 p-3 rounded-e-md'
              >
                <svg
                  className='flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path
                    className={showPassword ? 'hidden' : 'block'}
                    d='M9.88 9.88a3 3 0 1 0 4.24 4.24'
                  ></path>
                  <path
                    className={showPassword ? 'hidden' : 'block'}
                    d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'
                  ></path>
                  <path
                    className={showPassword ? 'hidden' : 'block'}
                    d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'
                  ></path>
                  <line
                    className={showPassword ? 'hidden' : 'block'}
                    x1='2'
                    x2='22'
                    y1='2'
                    y2='22'
                  ></line>
                  <path
                    className={showPassword ? 'block' : 'hidden'}
                    d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'
                  ></path>
                  <circle
                    className={showPassword ? 'block' : 'hidden'}
                    cx='12'
                    cy='12'
                    r='3'
                  ></circle>
                </svg>
              </button>
            </div>
            <button  className='w-full  px-4 outline-none rounded-lg bg-white h-9'>
								<span className=' text-zinc-950  font-sans font-semibold'>
									Продолжить
								</span>
							</button>
          </div>
        </div>
				<div className='text-white mx-auto mt-4'>
					<NavLink
						className='promoLink hover:underline'
						to='https://id.vk.com/about/id'
					>
						Узнать больше о VK ID
					</NavLink>
				</div>
      </div>
    </div>
  );
};

export { NewPassword };
