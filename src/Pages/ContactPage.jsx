import React, { useRef }  from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
// npm react tostify package
import { ToastContainer, toast, Bounce  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"

export default function ContactPage() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const form = useRef();
    // const onSubmit = data => console.log(data);
    const onSubmit = (e) =>{

        emailjs
            .sendForm('service_hqctt43', 'template_de6snrs', form.current, {
                publicKey: 'MLJah7WZ0K3Zd7pHB',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                const notify = () => toast.success("Message Sent!");
                notify();
                reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    }

    const container = (delay) => ({
        hidden: { x:-100, opacity: 0 },
        visible:{
          x:0,
          opacity: 1,
          transition: { delay: delay, duration: 0.5 }
        },
      });
      
      const container2 = (delay) => ({
        hidden: { x:100, opacity: 0 },
        visible:{
          x:0,
          opacity: 1,
          transition: { delay: delay, duration: 0.5 }
        },
      });
  
return (
    <section className='w-full min-h-screen grid items-center bg-slate-100 p-4'>
        <motion.h1 initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{ delay: 0.3, duration: 0.5}} className='text-4xl lg:text-5xl py-5 text-center text-slate-700 font-semibold lg:py-14'>Contact<span className='text-neutral-500'> Me</span></motion.h1>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: 0.5, duration: 0.5}} id='contact-in' className='h-auto m-auto flex flex-wrap flex-col lg:flex-row md:w-3/4 lg:w-4/5 p-3 rounded-xl shadow-sm bg-slate-200'>
            <div className='w-full h-auto flex-[50%]' id='contact-map'>
                <motion.iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6167.320766090233!2d75.5987172498805!3d31.343642680270325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e1!3m2!1sen!2sin!4v1721747189295!5m2!1sen!2sin"
                    width="100%"
                    height="auto"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full h-full rounded-xl'
                    variants={container(0.5)}
                    initial="hidden" animate="visible"
                ></motion.iframe>
            </div>
            <div id='contact-form' className='w-full h-auto flex-[50%]'>
                <motion.form variants={container2(0.5)}
                initial="hidden" animate="visible" className="max-w-md m-auto lg:p-3 rounded-2xl w-10/12" ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="full_name" id="floating_full_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register('full_name',{required:'Full Name is required'})}/>
                                <label htmlFor="floating_full_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                                {errors.full_name && <span className='text-red-500'>{errors.full_name.message}</span>}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{10}" name="phone_number" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register('phone_number',{required:'Phone Number is required', pattern:/[0-9]{10}/})}/>
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                                {errors.phone_number && <span className='text-red-500'>{errors.phone_number.message}</span>}
                            </div>
                        </div>
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register('email',{required:'Email address is required', pattern:{value:/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/,message:'Email is invalid'}})} />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="email_subject" id="floating_email_subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register('email_subject',{required:'Subject is required'})}/>
                                <label htmlFor="floating_email_subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email subject</label>
                                {errors.email_subject && <span className='text-red-500'>{errors.email_subject.message}</span>}
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea id="text_message" rows="4" name='text_message' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""{...register('text_message',{required:'Message is required'})}></textarea>
                            <label htmlFor="text_message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your message</label>
                            {errors.text_message && <span className='text-red-500'>{errors.text_message.message}</span>}
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        {/* npm react tostify package */}
                        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
                    </motion.form>
            </div>
        </motion.div>
        <div className='flex justify-between mt-auto' id='navigation-btn'>
            <motion.button variants={container(0.7)}
                initial="hidden" animate="visible" className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/skills'>Previous</Link></motion.button>
            <motion.button variants={container2(0.7)}
                initial="hidden" animate="visible" className='py-2 px-5 bg-blue-600 rounded-lg border text-white font-bold hover:bg-blue-700 transition-all'><Link to='/'>Next</Link></motion.button>
        </div>
    </section>
  )
}
