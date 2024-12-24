import { useState } from "react"
import '../assets/css/order-dialog.scss'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSSTransition } from 'react-transition-group';

export default function OrderDialog({ openType, isShow, setIsShow }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    function onSubmit(isSubscribed) {
        // const { name, email } = this
        if (name.trim() === '' || name.length > 30 || ['李雷', '李大雷'].includes(name)) {
            // this.$toast.warning('用户名为空或者长度大于30字符')
            console.log('name为空或者长度大于30字符');

            return
        } else if (
            !/^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/.test(email)
        ) {
            // this.$toast.warning('邮箱格式不对')
            toast.warning('邮箱格式不对', {
                position: "top-center",
            });
            console.log('邮箱格式不对');
            return
        }
        insertGuest(name, email, isSubscribed)
    }

    const insertGuest = async (name, email, isSubscribed) => {
        try {
            const data = await insertGuest({
                data: {
                    name, email, isSubscribed
                }
            })
            if (data) {
                if (isSubscribed) {
                    // 如果是订阅状态，那就加个订阅状态，否则只加用户注册状态
                    localStorage.info =
                        localStorage.info === undefined
                            ? `#${data.id}_sub;#${data.id}_user;`
                            : localStorage.info +
                            `#${data.id}_sub;#${data.id}_user;`
                } else {
                    localStorage.info =
                        localStorage.info === undefined
                            ? `#${data.id}_user;`
                            : localStorage.info + `#${data.id}_user;`
                }
            } else {
                this.$toast.error('订阅失败')
            }
            if (this.openType === 'subscribe') {
                this.$toast.success('订阅成功！')
            } else {
                this.$toast.success('注册成功！')
            }
            this.handleClose()
        } catch (err) {
            this.$toast.error(err.msg ? err.msg : err)
            this.handleClose()
        }
    }

    function handleClose() {
        setIsShow(false)
    }

    if (isShow) {
        return (
            <>
                <div className="dialog">
                    <div className="dialog-title">信息填写</div>
                    <form>
                        <div className="form-item">
                            <label className="form-key" htmlFor="name">起个响当当的名字吧！</label>
                            <p className="form-value">
                                <input
                                    type="text"
                                    id="name"
                                    autoComplete="off"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    aria-label="输入名字"
                                />
                            </p>
                        </div>
                        <div className="form-item">
                            <label className="form-key" htmlFor="email">整个静鸡鸡的邮箱吧！</label>
                            <p className="form-value">
                                <input
                                    type="text"
                                    id="email"
                                    autoComplete="off"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    aria-label="输入邮箱"
                                />
                            </p>
                        </div>
                        <div className="form-tip">
                            TIP: 此订阅仅会向您推送博文，博主用生命担保不会把你的信息卖给其他网站来牟取利益，请您放心。
                        </div>
                        <div className="form-actions">
                            {openType === 'subscribe' && (
                                <button
                                    className="form-btn form-submit"
                                    type="button"
                                    onClick={() => onSubmit(true)}
                                >
                                    订 &nbsp; 阅
                                </button>
                            )}
                            <button
                                className="form-btn form-submit"
                                type="button"
                                onClick={() => onSubmit(false)}
                            >
                                确 &nbsp; 定
                            </button>
                            <button
                                className="form-btn form-close"
                                type="button"
                                onClick={handleClose}
                            >
                                关 &nbsp; 闭
                            </button>
                        </div>
                    </form>
                </div>
                {/*<transition name="dialog">*/}

                {/*</transition>*/}
            </>
        );
    }

}
