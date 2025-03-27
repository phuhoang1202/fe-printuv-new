import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { Form, Input, Button, Radio, Steps, Modal, Select } from 'antd'
import 'react-phone-input-2/lib/style.css'
import './SignUp.css'
import axios from 'axios'
import Loading from '@components/loadingCommon/Loading'
import { Toast } from '@utils/toast'
import { registerApi, verifyOTP } from '@services/user/auth.js'
import { phoneNumberData } from '@utils/international_phone_number.js'
import bgLogin from '@assets/images/login/bgLogin.png'
import IconClose from '@assets/images/IconClose.svg'

function SignUp() {
  const [currentStep, setCurrentStep] = useState(0)
  const [form] = Form.useForm()
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState('kr')
  // const [countryName, setCountryName] = useState('Korea')
  const [loading, setLoading] = useState(false)
  const [otpEnabled, setOtpEnabled] = useState(false)
  const [registerResponse, setRegisterResponse] = useState(null)
  const [minutes, setMinutes] = useState(4)
  const [seconds, setSeconds] = useState(59)
  const [checkBtn, setCheckBtn] = useState(false)
  const [dataResponve, setDataResponve] = useState({})
  const [getAddress, setGetAddress] = useState({})
  const [countryKr, setCountryKr] = useState('')

  // Step
  const stepsCurrent = [
    {
      id: 1,
      step: '회원 인증',
    },
    { id: 2, step: '약관 동의' },
    { id: 3, step: '정보 입력' },
  ]

  // const onChange = (text) => {
  //   console.log('onChange:', text)
  // }
  // const sharedProps = {
  //   onChange,
  // }

  // const { coords } = useGeolocated({
  //   positionOptions: {
  //     enableHighAccuracy: false,
  //   },
  //   userDecisionTimeout: 5000,
  // })

  // const handleReset = () => {
  //   form.resetFields()
  //   setCurrentStep(0)
  // }

  const navigate = useNavigate()

  const handleNext = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setCurrentStep(currentStep + 1)
    }, 500)
  }

  const handlePrev = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCurrentStep(currentStep - 1)
    }, 500)
  }

  // Step 2
  const [isFormFilled, setIsFormFilled] = useState(false)

  const handleValuesChange = (changedValues, allValues) => {
    // Kiểm tra nếu có ít nhất một trường có giá trị
    const isFilled = Object.values(allValues).some((value) => value)
    setIsFormFilled(isFilled)
  }

  const handleStep2Submit = async () => {
    try {
      // setIsFormValid(true)
      const bodyRegister = [
        {
          email: form.getFieldValue('email'),
          gender: form.getFieldValue('gender'),
          name: form.getFieldValue('name'),
          otp: form.getFieldValue('otp'),
          password: form.getFieldValue('password'),
          phoneNumber: form.getFieldValue('phoneNumber'),
          birthday: form.getFieldValue('birthday'),
          username: form.getFieldValue('email'),
          countryCode: form.getFieldValue('state'),
          sendOTP: false,
          state: form.getFieldValue('state'),
          clearanceNumber: form.getFieldValue('clearanceNumber'),
          referralCode: form.getFieldValue('referralCode'),
        },
      ]

      // console.log('bodyRegister', bodyRegister)

      const responseRegister = await registerApi(bodyRegister)

      if (Array.isArray(responseRegister.data) && responseRegister.data.length != 0) {
        navigate('/login')
        Toast.success('Registration successful!')
      }
    } catch (error) {
      Toast.error('An error occurred during registration.')
    }
  }

  const resendOTP = () => {
    setMinutes(4)
    setSeconds(59)
    handleVerifyOTP()
  }

  return (
    <div>
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

          <div className='p-14 flex flex-col items-center justify-center border shadow-md bg-white rounded-lg relative z-10'>
            <h1 className='text-[#3B3B3B] font-bold text-largerPrdName uppercase'>Đăng nhập</h1>

            <div className='absolute right-4 top-4 cursor-pointer' onClick={() => navigate('/')}>
              <img src={IconClose} alt='icon' />
            </div>

            <div className='mt-10 '>
              <Form form={form} onFinish={handleStep2Submit} onValuesChange={handleValuesChange}>
                <div className='flex items-center w-[500px] justify-between gap-4'>
                  <Form.Item
                    className='w-full'
                    name='name'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập tên của bạn.',
                      },
                      {
                        min: 10,
                        message: 'Tên phải dài ít nhất 10 ký tự!',
                      },
                      {
                        max: 25,
                        message: 'Tên phải ít hơn 25 ký tự.',
                      },
                    ]}
                  >
                    <div className='flex flex-col gap-1 '>
                      <label htmlFor='name' className='text-[#3B3B3B] font-medium text-normal'>
                        Họ và tên
                      </label>
                      <Input
                        id='name'
                        value={form.getFieldValue('name')}
                        placeholder='Nhập họ và tên ...'
                        className='border px-2 rounded-lg h-11 w-full'
                      />
                    </div>
                  </Form.Item>

                  <Form.Item
                    name='email'
                    className='w-full'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập địa chỉ email của bạn.',
                      },
                      {
                        type: 'email',
                        message: 'Vui lòng nhập địa chỉ email hợp lệ',
                      },
                    ]}
                  >
                    <div className='flex flex-col gap-1'>
                      <label htmlFor='email' className='text-[#3B3B3B] font-medium text-normal'>
                        Email
                      </label>
                      <Input
                        id='email'
                        value={form.getFieldValue('email')}
                        placeholder='email@naver.com'
                        className='border px-2 rounded-lg h-11'
                      />
                    </div>
                  </Form.Item>
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                  <Form.Item
                    name='password'
                    rules={[
                      {
                        validator: (_, value) => {
                          if (!value) {
                            return Promise.reject(new Error('Vui lòng nhập mật khẩu của bạn'))
                          }

                          if (value.length < 6) {
                            return Promise.reject(new Error('Mật khẩu phải dài ít nhất 6 ký tự'))
                          }

                          if (value.length > 24) {
                            return Promise.reject(new Error('Mật khẩu phải ít hơn 25 ký tự.'))
                          }

                          if (!/[A-Z]/.test(value)) {
                            return Promise.reject(new Error('Mật khẩu phải chứa ít nhất một chữ cái viết hoa'))
                          }

                          if (!/[a-z]/.test(value)) {
                            return Promise.reject(new Error('Mật khẩu phải chứa ít nhất một chữ cái thường.'))
                          }

                          if (!/[0-9]/.test(value)) {
                            return Promise.reject(new Error('Mật khẩu phải chứa ít nhất một chữ số.'))
                          }

                          if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                            return Promise.reject(new Error('Mật khẩu phải chứa ít nhất một ký tự đặc biệt.'))
                          }

                          return Promise.resolve()
                        },
                      },
                    ]}
                  >
                    <div className='flex flex-col gap-1'>
                      <label htmlFor='password' className='text-[#3B3B3B] font-medium text-normal'>
                        Mật khẩu
                      </label>
                      <Input.Password
                        id='password'
                        placeholder='Vui lòng điền mật khẩu ...'
                        className='border px-2 rounded-lg h-11'
                        iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                      />
                    </div>
                  </Form.Item>

                  <Form.Item
                    name='cfPassword'
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng xác nhận mật khẩu của bạn.',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                          }
                          return Promise.reject(new Error('Hai mật khẩu bạn nhập không khớp nhau'))
                        },
                      }),
                    ]}
                  >
                    <div className='flex flex-col gap-1'>
                      <label htmlFor='cfPassword' className='text-[#3B3B3B] font-medium text-normal'>
                        Xác nhận mật khẩu
                      </label>
                      <Input.Password
                        id='cfPassword'
                        placeholder='Vui lòng nhập mật khẩu ...'
                        className='border px-2 rounded-lg h-11'
                        iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                      />
                    </div>
                  </Form.Item>

                  <Form.Item
                    name='phoneNumber'
                    rules={[
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          const cleanedValue = value.replace(/\s+/g, '')

                          if (!cleanedValue) {
                            return Promise.reject('Vui lòng nhập số điện thoại của bạn.')
                          }
                        },
                      }),
                    ]}
                  >
                    <div className='flex flex-col gap-1'>
                      <label htmlFor='phone' className='text-[#3B3B3B] font-medium text-normal'>
                        Số điện thoại
                      </label>
                      <Input
                        id='phone'
                        name='phoneNumber'
                        type='text'
                        placeholder='Vui lòng nhập số điện thoại ...'
                        className='border px-2 rounded-lg h-11'
                      />
                    </div>
                  </Form.Item>
                </div>

                <div className='flex items-center justify-between gap-4 mt-10 mx-auto'>
                  <button
                    style={{ border: '2px solid black' }}
                    className='h-11 font-medium text-normal text-[#3B3B3B] rounded-lg w-full'
                    onClick={() => navigate('/login')}
                  >
                    Quay lại
                  </button>
                  <button
                    className={`h-11 font-semibold text-normal text-white rounded-lg w-full bg-[#D1B584] ${
                      !isFormFilled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-[#ad8a51]'
                    }`}
                    disabled={!isFormFilled}
                  >
                    Xác nhận
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
