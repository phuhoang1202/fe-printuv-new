import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '@components/loadingCommon/Loading.jsx'
import { loginApi, socialLoginApi } from '@services/user/auth.js'
import { Toast } from '@utils/toast'
import { setToken, removeToken, setTokenUser } from '@utils/auth.js'
import LogoNoBg from '@assets/images/Logo/LogoNoBg.png'
import IconEye from '@assets/images/IconEye.svg'
import IconEyeOff from '@assets/images/IconEyeOff.svg'
import IconClose from '@assets/images/IconClose.svg'
import bgLogin from '@assets/images/login/bgLogin.png'
import { Button } from 'antd'

function Login() {
  const [user, setUser] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loginUser, setLoginUser] = useState({
    id: '',
    password: '',
  })

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginUser((prevLoginUser) => ({
      ...prevLoginUser,
      [name]: value,
    }))
  }

  const handleSubmitLogin = async (username, password) => {
    try {
      removeToken('token')
      setLoading(true)
      const response = await loginApi(username, password)
      const accessToken = response.data.access_token

      setToken(accessToken)

      const checkRole = jwtDecode(accessToken)
      if (checkRole.authorities.includes('role_admin')) {
        Toast.success('Login successful!')
        setTimeout(() => {
          navigate('/admin')
        }, 1000)
      } else if (checkRole.authorities.includes('role_user')) {
        Toast.success('Login successful!')
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }
    } catch (error) {
      Toast.error(error.response.data.error_description || 'Login failed!')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSubmitLogin(loginUser.id, loginUser.password)
  }

  return (
    <div>
      {loading && <Loading />}
      <div
        className='w-full h-screen flex items-center justify-center'
        style={{
          background: `url(${bgLogin}) no-repeat center bottom`,
          backgroundSize: 'cover',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className='absolute inset-0 bg-black/10 backdrop-blur-sm'></div>

        <div className='w-[500px] p-14 flex flex-col items-center justify-center border shadow-md rounded-lg relative bg-white z-10'>
          <h1 className='text-[#3B3B3B] font-bold text-largerPrdName uppercase'>Đăng nhập</h1>

          <div className='absolute right-4 top-4 cursor-pointer' onClick={() => navigate('/')}>
            <img src={IconClose} alt='icon' />
          </div>

          <form className='w-full mt-10'>
            <div className='flex flex-col gap-3 w-full'>
              <label htmlFor='ID' className='w-full text-[#3B3B3B] text-normal font-medium'>
                Email
              </label>
              <input
                id='id'
                name='id'
                type='text'
                value={loginUser.id || ''}
                onChange={handleChange}
                placeholder='Vui lòng điền email ...'
                className='w-full p-2 rounded-lg h-11 px-4'
                style={{ border: '1px solid #EFEFEF' }}
              />
            </div>
            <div className='flex flex-col gap-3 w-full pt-7'>
              <label htmlFor='password' className='w-full text-[#3B3B3B] text-normal font-medium'>
                Password
              </label>
              <div className='relative w-full'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  value={loginUser.password || ''}
                  onChange={handleChange}
                  placeholder='**********'
                  className='w-full p-2 rounded-lg h-11 px-4'
                  style={{ border: '1px solid #EFEFEF' }}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer'
                >
                  {showPassword ? <img src={IconEye} alt='icon' /> : <img src={IconEyeOff} alt='icon' />}
                </span>
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              type='primary'
              className=' w-full h-11 mt-8 text-white rounded-lg font-medium text-primaryPrdName'
            >
              Đăng nhập
            </Button>
          </form>

          <div className='mt-6 text-center text-base'>
            Bạn chưa có tài khoản?
            <Link to={'/signup'} className=' font-medium px-1 text-blue-600 hover:text-blue-700 text-primaryPrdName'>
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
