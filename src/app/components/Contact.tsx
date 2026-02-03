import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './ui/button';

// Ton numéro WhatsApp : indicatif pays + numéro sans espaces ni + (ex. 221771234567)
const WHATSAPP_NUMBER = '2250787648092';

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const InputGroup = ({ label, error, register, name, type = "text", errorMsg, ...props }: any) => (
  <div className="relative mb-6">
    <input
      {...register(name, { required: true })}
      type={type}
      placeholder=" "
      className={`peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-3 px-1 text-gray-900 dark:text-white focus:outline-none focus:border-[#8B5CF6] transition-colors ${error ? 'border-red-500' : ''}`}
      {...props}
    />
    <label className="absolute left-1 top-3 text-gray-500 dark:text-gray-400 text-base transition-all duration-200 pointer-events-none peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#8B5CF6] peer-not-placeholder-shown:-top-3.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-500">
      {label}
    </label>
    {error && <span className="text-xs text-red-500 mt-1 block">{errorMsg}</span>}
  </div>
);

const SelectGroup = ({ label, error, register, name, options, errorMsg, ...props }: any) => (
  <div className="relative mb-6">
    <select
      {...register(name, { required: true })}
      className={`peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-3 px-1 text-gray-900 dark:text-white focus:outline-none focus:border-[#8B5CF6] transition-colors appearance-none ${error ? 'border-red-500' : ''}`}
      {...props}
      defaultValue=""
    >
      <option value="" disabled></option>
      {options.map((opt: string) => <option key={opt} value={opt} className="text-black">{opt}</option>)}
    </select>
    <label className="absolute left-1 top-3 text-gray-500 dark:text-gray-400 text-base transition-all duration-200 pointer-events-none peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#8B5CF6] peer-not-placeholder-shown:-top-3.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-500">
      {label}
    </label>
    {error && <span className="text-xs text-red-500 mt-1 block">{errorMsg}</span>}
  </div>
);

export function Contact() {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    
    // Simulate API call or processing
    setTimeout(() => {
      const message = `Bonjour, je suis ${data.name}. \nEmail: ${data.email}\nService: ${data.service}\nMessage: ${data.message}`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
      toast.success(t('contact.success'));
      
      setTimeout(() => {
        window.open(url, '_blank');
        setIsLoading(false);
      }, 1500);
    }, 1000);
  };

  const serviceOptions = [
    t('services.graphic'),
    t('services.web'),
    t('services.strategy'),
    t('services.branding')
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black transition-colors relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-montserrat font-semibold text-3xl md:text-4xl mb-6 text-black dark:text-white"
            >
              {t('contact.title')}
            </motion.h2>
            <div className="w-20 h-1 bg-[#8B5CF6] mx-auto rounded-full" />
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)} 
            className="bg-gray-50 dark:bg-zinc-900 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup 
                label={t('contact.name')} 
                name="name" 
                register={register} 
                error={errors.name} 
                errorMsg={t('form.required')}
              />
              <InputGroup 
                label={t('contact.email')} 
                name="email" 
                type="email" 
                register={register} 
                error={errors.email} 
                errorMsg={t('form.required')}
              />
            </div>

            <SelectGroup 
              label={t('contact.service')} 
              name="service" 
              register={register} 
              error={errors.service} 
              options={serviceOptions} 
              errorMsg={t('form.required')}
            />

            <div className="relative mb-8">
              <textarea
                {...register("message", { required: true, minLength: 10 })}
                placeholder=" "
                rows={4}
                className={`peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-3 px-1 text-gray-900 dark:text-white focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none ${errors.message ? 'border-red-500' : ''}`}
              />
              <label className="absolute left-1 top-3 text-gray-500 dark:text-gray-400 text-base transition-all duration-200 pointer-events-none peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#8B5CF6] peer-not-placeholder-shown:-top-3.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-500">
                {t('contact.message')}
              </label>
              {errors.message && <span className="text-xs text-red-500 mt-1 block">{t('form.too_short')}</span>}
            </div>

            <div className="text-center">
              <Button type="submit" variant="whatsapp" size="lg" isLoading={isLoading} className="w-full md:w-auto">
                {t('contact.submit')} <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
