"use client";

import logo from "../../public/images/logo.svg";
import letterlogo from "../../public/images/momodo.svg";
import Image from "next/image";
import LoginButton from "../components/LoginButton";
import Link from "next/link";
import { kakaoAuthUrl } from "../api/kakao-login";

export default function Home() {
  return (
    <>
      <h1 className="h-4/5">
        <Image src={logo} className="mb-6" alt="로고 이미지" />
        <Image src={letterlogo} alt="레터링 로고 이미지" />
      </h1>
      <div className="text-center absolute mb-20">
        <LoginButton type="kakao" href={kakaoAuthUrl}>
          카카오톡 계정으로 로그인
        </LoginButton>
        <LoginButton type="google" href="/signup">
          구글 계정으로 로그인
        </LoginButton>
        <LoginButton type="momodo" href="/login">
          모모두 계정으로 로그인
        </LoginButton>
        <Link href="signup">
          <button className="block mx-auto my-0">회원가입</button>
        </Link>
      </div>
    </>
  );
}
