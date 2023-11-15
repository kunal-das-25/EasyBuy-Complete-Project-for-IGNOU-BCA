import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  en: {
    translation: {
      CRM: 'CRM',
      Shop: 'Shop',
      Chat: 'Chat',
      Sales: 'Sales',
      Results: 'Results',
      Invoice: 'Invoice',
      Payment: 'Payment',
      Profile: 'Profile',
      Account: 'Account',
      Pricing: 'Pricing',
      Checkout: 'Checkout',
      Sessions: 'Sessions',
      Ecommerce: 'Ecommerce',
      Dashboards: 'Dashboards',
      'Enrolled Courses': 'Enrolled Courses',
      'Course Completed': 'Course Completed',
      'Course in Progress': 'Course in Progress',
      'Learning Management': 'Learning Management',
      'Welcome Back! Watson': 'Welcome Back! Watson',
      'Job Management': 'Job Management',
      'User & Contact': 'User & Contact',
      'User List': 'User List',
      'User Grid': 'User Grid',
      'Contact List': 'Contact List',
      'Contact Grid': 'Contact Grid',
      'Invoice List': 'Invoice List',
      'Invoice Details': 'Invoice Details',
      'Create Invoice': 'Create Invoice',
      'Product Details': 'Product Details',
      'Billing Address': 'Billing Address',
      'Payment Complete': 'Payment Complete',
      'Admin Ecommerce': 'Admin Ecommerce',
      'Product List': 'Product List',
      'Product Grid': 'Product Grid',
      'Create Product': 'Create Product',
      'Upcoming Task': 'Upcoming Task',
      'Study Time Last Week': 'Study Time Last Week',
      'Your Downloads': 'Your Downloads',
      'Course Status': 'Course Status'
    }
  },
  es: {
    translation: {
      CRM: 'CRM',
      Chat: 'Chat',
      Shop: 'Tienda',
      Sales: 'Ventas',
      Payment: 'Pago',
      Account: 'Cuenta',
      Profile: 'Perfil',
      Pricing: 'Precios',
      Invoice: 'Factura',
      Sessions: 'Sesiones',
      Results: 'Resultados',
      Checkout: 'Verificar',
      Dashboards: 'Cuadros de mando',
      Ecommerce: 'Comercio electrónico',
      'Upcoming Task': 'Próxima tarea',
      'Your Downloads': 'Tus descargas',
      'Course Status': 'Estado del curso',
      'Course in Progress': 'Curso en curso',
      'Enrolled Courses': 'Cursos inscritos',
      'Course Completed': 'Curso completado',
      'Job Management': 'Gestión de trabajos',
      'User & Contact': 'Usuario y contacto',
      'User List': 'Lista de usuarios',
      'User Grid': 'Cuadrícula de usuario',
      'Contact List': 'Lista de contactos',
      'Contact Grid': 'Cuadrícula de contacto',
      'Invoice List': 'Lista de facturas',
      'Create Invoice': 'Crear factura',
      'Billing Address': 'Dirección de Envio',
      'Payment Complete': 'Pago completo',
      'Product List': 'Lista de productos',
      'Create Product': 'Crear producto',
      'Product Details': 'Detalles de producto',
      'Product Grid': 'Cuadrícula de productos',
      'Invoice Details': 'Detalles de la factura',
      'Learning Management': 'Gestión del aprendizaje',
      'Welcome Back! Watson': '¡Bienvenido de nuevo! Watson',
      'Admin Ecommerce': 'Administrador de comercio electrónico',
      'Study Time Last Week': 'Tiempo de estudio la semana pasada'
    }
  }
};
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })
  .catch((r) => console.log(r));
