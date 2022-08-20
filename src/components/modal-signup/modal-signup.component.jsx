import React from "react";
import "./modal-signup.styles.css";

import WalletConnect from "@walletconnect/client";
import { convertUtf8ToHex } from "@walletconnect/utils";
import { useEffect, useState } from "react";
import { recoverPersonalSignature } from "eth-sig-util";
import WCQrMordal from "@walletconnect/qrcode-modal";
import QRCode from "qrcode.react";
import axios from "axios";
import { Router, Redirect } from "react-router-dom";




export default function ModalSignUp() {

    const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: WCQrMordal
      });
      
      const CcxApiTest = ({ signature, signing_message, address }) => {
        const [request, setRequest] = useState();
        const [response, setResponse] = useState();
        const handleClickSend = () => {
          console.log("click");
          const api =
            "https://ccx.upbitit.com/api/v1/personal_wallet_whitelist/signature/test";
      
          const data = {
            signature,
            signing_message,
            address
          };
      
          setRequest(data);
          console.log("data", data);
          setResponse(undefined);
          axios
            .post(api, data)
            .then((res) => {
              console.log("res", res);
              setResponse(res.data);
            })
            .catch((e) => {
              console.log("error", e);
              setResponse(e.response.data);
            });
        };
        return (
          <>
            <button onClick={handleClickSend}>CCX API 테스트</button>
            {request && <p>Request : {JSON.stringify(request)}</p>}
            {response && <p>Response : {JSON.stringify(response)}</p>}
          </>
        );
      };
      
      // export default 
    //   function SignUpWalletConnect() {
        const [connected, setConnected] = useState(connector.connected);
        const [number, setNumber] = useState(0);
        const [message, setMessage] = useState("논스는 원하는대로! 1234");
        const [isSigning, setIsSigning] = useState(false);
        const [signedMessage, setSignedMessage] = useState();
        const [signedAccount, setSignedAccount] = useState();
        const [signedText, setSignedText] = useState();
        const [qrcode, setQrcode] = useState();
        const [chainId, setChainId] = useState();
      
        // useEffect(handleClockLoginWithWalletConnect, []);
      
        const handleClockLoginWithWalletConnect = () => {
          // Create a connector
          console.log("handleClickConnect");
      
          // Check if connection is already established
          if (!connector.connected) {
            // create new session
            connector.createSession().then(() => {
              const uri = connector.uri;
              console.log({ uri });
              setQrcode(uri);
            });
            setNumber((v) => v + 1);
            console.log("create session");
          }
      
          // Subscribe to connection events
          connector.on("connect", (error, payload) => {
            setNumber((v) => v + 1);
            if (error) {
              console.log("connect error", error);
              setChainId(undefined);
              throw error;
            }
      
            setConnected(true);
      
            // Get provided accounts and chainId
            console.log("connect success", payload);
            const { accounts, chainId } = payload.params[0];
            setChainId(chainId);
            console.log(accounts);
            setSignedAccount(accounts);
            window.location.replace("./");
            
          });
      
          connector.on("session_update", (error, payload) => {
            setNumber((v) => v + 1);
            if (error) {
              console.log("session_update error", error);
              setChainId(undefined);
              throw error;
            }
      
            // Get updated accounts and chainId
            console.log("session_update success", payload);
            const { accounts, chainId } = payload.params[0];
            setChainId(chainId);
            
          });
      
          connector.on("disconnect", (error, payload) => {
            setNumber((v) => v + 1);
            setChainId(undefined);
            if (error) {
              console.log("disconnect error", error);
              throw error;
            }
      
            setConnected(false);
            console.log("disconnect success", payload);
            // Delete connector
          });
        };
      
        const handleClickDisconnect = () => {
          console.log(connector);
          connector.killSession();
          setSignedAccount(null);
        };
      
        const handleClickSign = () => {
          console.log(connector);
          console.log(connector.accounts);
          const account = connector.accounts[0];
          setSignedMessage("");
      
          if (account) {
            const msgParams = [
              convertUtf8ToHex(message), // Required
              account // Required
            ];
      
            // Sign personal message
            setIsSigning(true);
            connector
              .signPersonalMessage(msgParams)
              .then((result) => {
                // Returns signature.
                console.log(result);
                setIsSigning(false);
                setSignedMessage(result);
                setSignedAccount(account);
                setSignedText(message);
              })
              .catch((error) => {
                // Error returned when rejected
                console.error(error);
                setIsSigning(false);
              });
          } else {
            alert("not account selected");
          }
        };
      
    return (
      <div className="bg-white modal">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            <span className="block">Your all access a pass to the world’s best artists and events</span>
            <span className="block instructions">Create an account to buy tickets from your favorite artists and be the first to know when there’s a new drop. </span>
            {/* <span className="block">Start your free trial today.</span> */}
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button
                // href="./signup/wallet-connect"
                onClick={(signedAccount) ? handleClickDisconnect : handleClockLoginWithWalletConnect}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 wallet-connect"
              >
                {(signedAccount) ? "Disconnect" : "Connect"}
              </button>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 google"
              >
                Google
              </a>
            </div>
            {/* <div className="inline-flex rounded-md shadow">
              <button
                // href="./signup/wallet-connect"
                onClick={handleClickDisconnect}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 wallet-connect"
              >
                "Disconnect"
              </button>
            </div>
            <h1>signed account {signedAccount}</h1> */}
          </div>
        </div>
      </div>
    )
  }