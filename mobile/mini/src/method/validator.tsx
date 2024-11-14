// 支持香港手机号
function isPhone(phone: string) {
  return /^\d{8,11}$/.test(phone);
}

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validator = {
  isPhone,
  isEmail,
};

export { validator };
