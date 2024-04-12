import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './avatar.module.css'





const AvatarUser = ({alt,src,backgroundColor,name,surname,index,searchValue,isUserCard}) => {
    const highlightSubStr = () => 
        searchValue
            ? name.replace(new RegExp(searchValue, 'gi'), (match) => `<span>${match}</span>`)
            : name;


            console.log(highlightSubStr())
    return (
        <>
        <Avatar
        style={{background:backgroundColor}}
            size={42}
            alt={alt}
            src={src}
            icon={
                !src && 
            <UserOutlined style={{color:'black'}}/>}
        />
        <div className={style.fullName} data-test-id={`joint-training-cards${index}`} >
            {isUserCard ? (
                <p
                    className={style.finded_users}
                    dangerouslySetInnerHTML={{ __html: highlightSubStr() }}
                />
            ) : (
                <p className='join-users-item__name'>{name}</p>
            )}
        <p>{surname}</p>
        </div>
        </>
    )
}

export default AvatarUser