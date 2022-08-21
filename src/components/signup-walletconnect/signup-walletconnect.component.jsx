//import "./styles.css";
import WalletConnect from "@walletconnect/client";
import { convertUtf8ToHex } from "@walletconnect/utils";
import { useEffect, useState } from "react";
import WCQrMordal from "@walletconnect/qrcode-modal";
import QRCode from "qrcode.react";
import axios from "axios";
import React from "react";

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

export default function SignUpWalletConnect() {
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

          // verify
          // const msgBufferHex = convertUtf8ToHex(message);
          // const address = recoverPersonalSignature({
          //   data: msgBufferHex,
          //   sig: result
          // });

          // console.log({ address });
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
    <div className="App">
      <h1>Wallet Connect Test</h1>
      state: {JSON.stringify(connected)}
      <br />
      connector.state: {JSON.stringify(connector.connected)}
      <br />
      <br />
      <button onClick={handleClockLoginWithWalletConnect}>Connect</button>
      <br />
      {!connected && qrcode && (
        <QRCode
          value={qrcode}
          renderAs="canvas"
          size={150}
          id="react-qrcode-logo"
          level="M"
        />
      )}
      {connected && (
        <>
          <br />
          connector.accounts : {JSON.stringify(connector.accounts)}
          <br />
          <br />
          chainId : {chainId}
          <br />
          <br />
          <button onClick={handleClickDisconnect}>Disconnect</button>
          <br />
          <br />
          <input
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <br />
          <br />
          <button onClick={handleClickSign}>PersonalSign</button>
          <br />
          isSigning: {JSON.stringify(isSigning)}
          {isSigning && (
            <>
              <br />
              "해당 앱 혹은 웹에서 서명해주세요!"
            </>
          )}
          <br />
          signedMessage: {signedMessage}
          {!!signedMessage && (
            <>
              <br />
              <br />
              <CcxApiTest
                signature={signedMessage}
                signing_message={signedText}
                address={signedAccount}
              />
            </>
          )}
          <br />
        </>
      )}
    </div>
  );
}
