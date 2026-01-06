/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type SupportedLocale =
  | "en"
  | "fr"
  | "es"
  | "de"
  | "ru"
  | "it"
  | "pt"
  | "tr"
  | "zh"
  | "ja"
  | "ar";

type LanguageState = {
  countryCode: string;
  countryName: string;
  locale: SupportedLocale;
};

type LanguageContextValue = LanguageState & {
  setCountry: (country: { code: string; name: string }) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const STORAGE_KEY = "app_language";

const DEFAULT_LANGUAGE: LanguageState = {
  countryCode: "gb",
  countryName: "United Kingdom",
  locale: "en",
};

const countryToLocale: Record<string, SupportedLocale> = {
  gb: "en",
  us: "en",
  ca: "en",
  au: "en",
  nz: "en",
  ie: "en",

  fr: "fr",
  be: "fr",

  es: "es",
  mx: "es",
  co: "es",
  ar: "es",

  de: "de",
  at: "de",
  ch: "de",

  ru: "ru",
  by: "ru",

  it: "it",

  pt: "pt",
  br: "pt",

  tr: "tr",

  cn: "zh",

  jp: "ja",

  sa: "ar",
  ae: "ar",
  eg: "ar",
};

const translations: Record<SupportedLocale, Record<string, unknown>> = {
  en: {
    common: {
      email: "Email",
      password: "Password",
      or: "or",
    },
    auth: {
      language: "English",
      welcome: "Welcome 👋",
      subtitle: "Login to your EPN account or create a new one",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      login: "Log in",
      signUp: "Sign up",
      loginWithGoogle: "Log in with Google",
      invalidCredentials: "Invalid credentials",
      loginFailed: "Login failed",
    },
    reg: {
      language: "English",
      subtitle: "Create your EPN account or sign in",
      createPassword: "Create password (Minimum 8 characters)",
      confirmPassword: "Confirm password",
      tos: "By signing up, you agree to our Terms of Service and Privacy Policy",
      restricted: "You confirm you are not a resident of restricted countries",
      signUp: "Sign up",
      signIn: "Sign in",
      continueWithGoogle: "Continue with Google",
      passwordMin: "Password must be at least 8 characters",
      passwordMismatch: "Passwords do not match",
      signupFailed: "Signup failed",
      invalidCredentials: "Invalid credentials",
    },
    footer: {
      rights: "© 2025 EPN, All rights reserved",
    },
  },
  fr: {
    common: {
      email: "E-mail",
      password: "Mot de passe",
      or: "ou",
    },
    auth: {
      language: "Français",
      welcome: "Bienvenue 👋",
      subtitle: "Connectez-vous à votre compte EPN ou créez-en un",
      rememberMe: "Se souvenir de moi",
      forgotPassword: "Mot de passe oublié ?",
      login: "Se connecter",
      signUp: "S’inscrire",
      loginWithGoogle: "Se connecter avec Google",
      invalidCredentials: "Identifiants invalides",
      loginFailed: "Échec de la connexion",
    },
    reg: {
      language: "Français",
      subtitle: "Créez votre compte EPN ou connectez-vous",
      createPassword: "Créer un mot de passe (minimum 8 caractères)",
      confirmPassword: "Confirmer le mot de passe",
      tos: "En vous inscrivant, vous acceptez nos Conditions d’utilisation et notre Politique de confidentialité",
      restricted: "Vous confirmez ne pas être résident de pays restreints",
      signUp: "S’inscrire",
      signIn: "Se connecter",
      continueWithGoogle: "Continuer avec Google",
      passwordMin: "Le mot de passe doit contenir au moins 8 caractères",
      passwordMismatch: "Les mots de passe ne correspondent pas",
      signupFailed: "Échec de l’inscription",
      invalidCredentials: "Identifiants invalides",
    },
    footer: {
      rights: "© 2025 EPN, Tous droits réservés",
    },
  },
  es: {
    common: {
      email: "Correo",
      password: "Contraseña",
      or: "o",
    },
    auth: {
      language: "Español",
      welcome: "Bienvenido 👋",
      subtitle: "Inicia sesión en tu cuenta EPN o crea una nueva",
      rememberMe: "Recuérdame",
      forgotPassword: "¿Olvidaste tu contraseña?",
      login: "Iniciar sesión",
      signUp: "Registrarse",
      loginWithGoogle: "Iniciar con Google",
      invalidCredentials: "Credenciales inválidas",
      loginFailed: "Error al iniciar sesión",
    },
    reg: {
      language: "Español",
      subtitle: "Crea tu cuenta EPN o inicia sesión",
      createPassword: "Crea una contraseña (mínimo 8 caracteres)",
      confirmPassword: "Confirmar contraseña",
      tos: "Al registrarte, aceptas nuestros Términos de servicio y Política de privacidad",
      restricted: "Confirmas que no eres residente de países restringidos",
      signUp: "Registrarse",
      signIn: "Iniciar sesión",
      continueWithGoogle: "Continuar con Google",
      passwordMin: "La contraseña debe tener al menos 8 caracteres",
      passwordMismatch: "Las contraseñas no coinciden",
      signupFailed: "Error al registrarse",
      invalidCredentials: "Credenciales inválidas",
    },
    footer: {
      rights: "© 2025 EPN, Todos los derechos reservados",
    },
  },
  de: {
    common: {
      email: "E-Mail",
      password: "Passwort",
      or: "oder",
    },
    auth: {
      language: "Deutsch",
      welcome: "Willkommen 👋",
      subtitle: "Melde dich bei deinem EPN-Konto an oder erstelle ein neues",
      rememberMe: "Angemeldet bleiben",
      forgotPassword: "Passwort vergessen?",
      login: "Anmelden",
      signUp: "Registrieren",
      loginWithGoogle: "Mit Google anmelden",
      invalidCredentials: "Ungültige Zugangsdaten",
      loginFailed: "Anmeldung fehlgeschlagen",
    },
    reg: {
      language: "Deutsch",
      subtitle: "Erstelle dein EPN-Konto oder melde dich an",
      createPassword: "Passwort erstellen (mindestens 8 Zeichen)",
      confirmPassword: "Passwort bestätigen",
      tos: "Mit der Registrierung stimmst du unseren Nutzungsbedingungen und der Datenschutzrichtlinie zu",
      restricted: "Du bestätigst, dass du nicht in gesperrten Ländern wohnhaft bist",
      signUp: "Registrieren",
      signIn: "Anmelden",
      continueWithGoogle: "Mit Google fortfahren",
      passwordMin: "Das Passwort muss mindestens 8 Zeichen lang sein",
      passwordMismatch: "Passwörter stimmen nicht überein",
      signupFailed: "Registrierung fehlgeschlagen",
      invalidCredentials: "Ungültige Zugangsdaten",
    },
    footer: {
      rights: "© 2025 EPN, Alle Rechte vorbehalten",
    },
  },
  ru: {
    common: {
      email: "Эл. почта",
      password: "Пароль",
      or: "или",
    },
    auth: {
      language: "Русский",
      welcome: "Добро пожаловать 👋",
      subtitle: "Войдите в аккаунт EPN или создайте новый",
      rememberMe: "Запомнить меня",
      forgotPassword: "Забыли пароль?",
      login: "Войти",
      signUp: "Регистрация",
      loginWithGoogle: "Войти через Google",
      invalidCredentials: "Неверные учетные данные",
      loginFailed: "Ошибка входа",
    },
    reg: {
      language: "Русский",
      subtitle: "Создайте аккаунт EPN или войдите",
      createPassword: "Создайте пароль (минимум 8 символов)",
      confirmPassword: "Подтвердите пароль",
      tos: "Регистрируясь, вы соглашаетесь с Условиями сервиса и Политикой конфиденциальности",
      restricted: "Вы подтверждаете, что не являетесь резидентом запрещённых стран",
      signUp: "Зарегистрироваться",
      signIn: "Войти",
      continueWithGoogle: "Продолжить с Google",
      passwordMin: "Пароль должен быть не менее 8 символов",
      passwordMismatch: "Пароли не совпадают",
      signupFailed: "Ошибка регистрации",
      invalidCredentials: "Неверные учетные данные",
    },
    footer: {
      rights: "© 2025 EPN, Все права защищены",
    },
  },
  it: {
    common: {
      email: "Email",
      password: "Password",
      or: "o",
    },
    auth: {
      language: "Italiano",
      welcome: "Benvenuto 👋",
      subtitle: "Accedi al tuo account EPN o creane uno nuovo",
      rememberMe: "Ricordami",
      forgotPassword: "Password dimenticata?",
      login: "Accedi",
      signUp: "Registrati",
      loginWithGoogle: "Accedi con Google",
      invalidCredentials: "Credenziali non valide",
      loginFailed: "Accesso non riuscito",
    },
    reg: {
      language: "Italiano",
      subtitle: "Crea il tuo account EPN o accedi",
      createPassword: "Crea una password (minimo 8 caratteri)",
      confirmPassword: "Conferma password",
      tos: "Registrandoti, accetti i nostri Termini di servizio e la Privacy Policy",
      restricted: "Confermi di non essere residente in paesi soggetti a restrizioni",
      signUp: "Registrati",
      signIn: "Accedi",
      continueWithGoogle: "Continua con Google",
      passwordMin: "La password deve contenere almeno 8 caratteri",
      passwordMismatch: "Le password non corrispondono",
      signupFailed: "Registrazione non riuscita",
      invalidCredentials: "Credenziali non valide",
    },
    footer: {
      rights: "© 2025 EPN, Tutti i diritti riservati",
    },
  },
  pt: {
    common: {
      email: "Email",
      password: "Senha",
      or: "ou",
    },
    auth: {
      language: "Português",
      welcome: "Bem-vindo 👋",
      subtitle: "Entre na sua conta EPN ou crie uma nova",
      rememberMe: "Lembrar-me",
      forgotPassword: "Esqueceu a senha?",
      login: "Entrar",
      signUp: "Cadastrar",
      loginWithGoogle: "Entrar com Google",
      invalidCredentials: "Credenciais inválidas",
      loginFailed: "Falha no login",
    },
    reg: {
      language: "Português",
      subtitle: "Crie sua conta EPN ou entre",
      createPassword: "Criar senha (mínimo 8 caracteres)",
      confirmPassword: "Confirmar senha",
      tos: "Ao se cadastrar, você concorda com nossos Termos de Serviço e Política de Privacidade",
      restricted: "Você confirma que não é residente de países restritos",
      signUp: "Cadastrar",
      signIn: "Entrar",
      continueWithGoogle: "Continuar com Google",
      passwordMin: "A senha deve ter pelo menos 8 caracteres",
      passwordMismatch: "As senhas não coincidem",
      signupFailed: "Falha no cadastro",
      invalidCredentials: "Credenciais inválidas",
    },
    footer: {
      rights: "© 2025 EPN, Todos os direitos reservados",
    },
  },
  tr: {
    common: {
      email: "E-posta",
      password: "Şifre",
      or: "veya",
    },
    auth: {
      language: "Türkçe",
      welcome: "Hoş geldiniz 👋",
      subtitle: "EPN hesabınıza giriş yapın veya yeni bir hesap oluşturun",
      rememberMe: "Beni hatırla",
      forgotPassword: "Şifrenizi mi unuttunuz?",
      login: "Giriş yap",
      signUp: "Kayıt ol",
      loginWithGoogle: "Google ile giriş yap",
      invalidCredentials: "Geçersiz bilgiler",
      loginFailed: "Giriş başarısız",
    },
    reg: {
      language: "Türkçe",
      subtitle: "EPN hesabınızı oluşturun veya giriş yapın",
      createPassword: "Şifre oluştur (en az 8 karakter)",
      confirmPassword: "Şifreyi doğrula",
      tos: "Kayıt olarak Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul edersiniz",
      restricted: "Kısıtlı ülkelerde ikamet etmediğinizi onaylıyorsunuz",
      signUp: "Kayıt ol",
      signIn: "Giriş yap",
      continueWithGoogle: "Google ile devam et",
      passwordMin: "Şifre en az 8 karakter olmalıdır",
      passwordMismatch: "Şifreler eşleşmiyor",
      signupFailed: "Kayıt başarısız",
      invalidCredentials: "Geçersiz bilgiler",
    },
    footer: {
      rights: "© 2025 EPN, Tüm hakları saklıdır",
    },
  },
  zh: {
    common: {
      email: "邮箱",
      password: "密码",
      or: "或",
    },
    auth: {
      language: "中文",
      welcome: "欢迎 👋",
      subtitle: "登录你的 EPN 账号或创建新账号",
      rememberMe: "记住我",
      forgotPassword: "忘记密码？",
      login: "登录",
      signUp: "注册",
      loginWithGoogle: "使用 Google 登录",
      invalidCredentials: "凭证无效",
      loginFailed: "登录失败",
    },
    reg: {
      language: "中文",
      subtitle: "创建你的 EPN 账号或登录",
      createPassword: "创建密码（至少 8 个字符）",
      confirmPassword: "确认密码",
      tos: "注册即表示你同意服务条款和隐私政策",
      restricted: "你确认你不是受限制国家/地区的居民",
      signUp: "注册",
      signIn: "登录",
      continueWithGoogle: "使用 Google 继续",
      passwordMin: "密码至少需要 8 个字符",
      passwordMismatch: "两次输入的密码不一致",
      signupFailed: "注册失败",
      invalidCredentials: "凭证无效",
    },
    footer: {
      rights: "© 2025 EPN, 保留所有权利",
    },
  },
  ja: {
    common: {
      email: "メール",
      password: "パスワード",
      or: "または",
    },
    auth: {
      language: "日本語",
      welcome: "ようこそ 👋",
      subtitle: "EPNアカウントにログインするか、新しく作成してください",
      rememberMe: "ログイン状態を保持",
      forgotPassword: "パスワードをお忘れですか？",
      login: "ログイン",
      signUp: "新規登録",
      loginWithGoogle: "Googleでログイン",
      invalidCredentials: "認証情報が正しくありません",
      loginFailed: "ログインに失敗しました",
    },
    reg: {
      language: "日本語",
      subtitle: "EPNアカウントを作成するかログインしてください",
      createPassword: "パスワードを作成（8文字以上）",
      confirmPassword: "パスワードを確認",
      tos: "登録することで、利用規約とプライバシーポリシーに同意したものとみなされます",
      restricted: "制限対象国の居住者ではないことを確認します",
      signUp: "新規登録",
      signIn: "ログイン",
      continueWithGoogle: "Googleで続行",
      passwordMin: "パスワードは8文字以上である必要があります",
      passwordMismatch: "パスワードが一致しません",
      signupFailed: "登録に失敗しました",
      invalidCredentials: "認証情報が正しくありません",
    },
    footer: {
      rights: "© 2025 EPN, All rights reserved",
    },
  },
  ar: {
    common: {
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      or: "أو",
    },
    auth: {
      language: "العربية",
      welcome: "مرحبًا 👋",
      subtitle: "سجّل الدخول إلى حساب EPN أو أنشئ حسابًا جديدًا",
      rememberMe: "تذكرني",
      forgotPassword: "هل نسيت كلمة المرور؟",
      login: "تسجيل الدخول",
      signUp: "إنشاء حساب",
      loginWithGoogle: "تسجيل الدخول عبر Google",
      invalidCredentials: "بيانات اعتماد غير صالحة",
      loginFailed: "فشل تسجيل الدخول",
    },
    reg: {
      language: "العربية",
      subtitle: "أنشئ حساب EPN أو سجّل الدخول",
      createPassword: "إنشاء كلمة مرور (8 أحرف على الأقل)",
      confirmPassword: "تأكيد كلمة المرور",
      tos: "بالتسجيل، أنت توافق على شروط الخدمة وسياسة الخصوصية",
      restricted: "تؤكد أنك لست مقيمًا في الدول المقيدة",
      signUp: "إنشاء حساب",
      signIn: "تسجيل الدخول",
      continueWithGoogle: "المتابعة باستخدام Google",
      passwordMin: "يجب أن تكون كلمة المرور 8 أحرف على الأقل",
      passwordMismatch: "كلمتا المرور غير متطابقتين",
      signupFailed: "فشل إنشاء الحساب",
      invalidCredentials: "بيانات اعتماد غير صالحة",
    },
    footer: {
      rights: "© 2025 EPN، جميع الحقوق محفوظة",
    },
  },
};

function getByPath(obj: Record<string, unknown>, path: string): unknown {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (!current || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

function safeParseStoredLanguage(value: string | null): LanguageState | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as Partial<LanguageState>;
    if (!parsed.countryCode || !parsed.countryName || !parsed.locale) return null;
    if (!(parsed.locale in translations)) return null;
    return {
      countryCode: parsed.countryCode,
      countryName: parsed.countryName,
      locale: parsed.locale as SupportedLocale,
    };
  } catch {
    return null;
  }
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LanguageState>(DEFAULT_LANGUAGE);
  // TODO: Persist language selection to backend or user profile if needed

  useEffect(() => {
    document.documentElement.lang = state.locale;
    document.documentElement.dir = state.locale === "ar" ? "rtl" : "ltr";
  }, [state.locale]);

  const setCountry = useCallback((country: { code: string; name: string }) => {
    const code = country.code.toLowerCase();
    const locale = countryToLocale[code] ?? "en";
    setState({
      countryCode: code,
      countryName: country.name,
      locale,
    });
  }, []);

  const t = useCallback(
    (key: string) => {
      const fromLocale = getByPath(translations[state.locale], key);
      if (typeof fromLocale === "string") return fromLocale;

      const fromEnglish = getByPath(translations.en, key);
      if (typeof fromEnglish === "string") return fromEnglish;

      return key;
    },
    [state.locale]
  );

  const dir: "ltr" | "rtl" = useMemo(() => {
    return state.locale === "ar" ? "rtl" : "ltr";
  }, [state.locale]);

  const value: LanguageContextValue = useMemo(
    () => ({
      ...state,
      setCountry,
      t,
      dir,
    }),
    [dir, setCountry, state, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
