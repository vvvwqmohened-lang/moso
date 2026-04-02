// ========== دوال مساعدة للتعامل مع المستخدمين ==========
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
    const local = localStorage.getItem('currentUser');
    const session = sessionStorage.getItem('currentUser');
    if (local) return JSON.parse(local);
    if (session) return JSON.parse(session);
    return null;
}

function logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// ========== دوال الرسائل ==========
function getMessages() {
    const messages = localStorage.getItem('contactMessages');
    return messages ? JSON.parse(messages) : [];
}

function saveMessages(messages) {
    localStorage.setItem('contactMessages', JSON.stringify(messages));
}

function addMessage(name, email, subject, message) {
    const messages = getMessages();
    const newMessage = {
        id: Date.now(),
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleString('ar-EG'),
        read: false
    };
    messages.push(newMessage);
    saveMessages(messages);
    return newMessage;
}

function deleteMessage(id) {
    let messages = getMessages();
    messages = messages.filter(msg => msg.id !== id);
    saveMessages(messages);
}

function markAsRead(id) {
    const messages = getMessages();
    const msg = messages.find(m => m.id === id);
    if (msg) {
        msg.read = true;
        saveMessages(messages);
    }
}

// ========== تهيئة بعض المستخدمين والرسائل الافتراضية ==========
(function initDefaultData() {
    // المستخدمين
    const users = getUsers();
    if (users.length === 0) {
        const defaultUsers = [
            {
                id: 1,
                fullname: 'مدير النظام',
                username: 'admin',
                email: 'admin@example.com',
                phone: '0500000000',
                password: 'admin123',
                role: 'admin',
                verified: true,
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                fullname: 'مشرف عام',
                username: 'moderator',
                email: 'mod@example.com',
                phone: '0500000001',
                password: 'mod123',
                role: 'moderator',
                verified: true,
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                fullname: 'مستخدم عادي',
                username: 'user',
                email: 'user@example.com',
                phone: '0500000002',
                password: 'user123',
                role: 'user',
                verified: true,
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }

    // رسائل افتراضية تجريبية
    const messages = getMessages();
    if (messages.length === 0) {
        const sampleMessages = [
            {
                id: 1001,
                name: 'أحمد علي',
                email: 'ahmed@example.com',
                subject: 'استفسار عن مشروع',
                message: 'أرغب في معرفة المزيد عن خدمات تطوير المواقع',
                date: '2025-02-20 10:30',
                read: false
            },
            {
                id: 1002,
                name: 'سارة محمد',
                email: 'sara@example.com',
                subject: 'طلب تعاون',
                message: 'نحن شركة ناشئة ونرغب في التعاون معكم',
                date: '2025-02-21 14:15',
                read: true
            },
            {
                id: 1003,
                name: 'خالد عبدالله',
                email: 'khaled@example.com',
                subject: 'دعم فني',
                message: 'واجهت مشكلة في الموقع الرجاء المساعدة',
                date: '2025-02-22 09:45',
                read: false
            }
        ];
        localStorage.setItem('contactMessages', JSON.stringify(sampleMessages));
    }
})();