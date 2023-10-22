import { useDispatch, useSelector } from "react-redux";
import { Card, Space, Typography, Avatar, Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import style from "./DataProfile.module.css";

const { Text } = Typography;

const Profile = () => {
  const infouser = useSelector((state) => state.user);
  return (
    <div className={style.containerProfiler}>
      <Card
        hoverable
        className={style.ant}
       
      >
        <Space direction="vertical" align="center">
          {infouser.image ? (
            <Avatar
              src={infouser.image}
              style={{ margin: "12px 12px", height: "17vh", width: "auto" }}
            />
          ) : (
            <Avatar
              src="../../assets/img/user.png"
              style={{ margin: "12px 12px", height: "17vh", width: "auto" }}
            />
          )}
          <Space direction="vertical" align="start">
            <Row>
              <Col>
                <Text strong>Nombre:</Text>
              </Col>
              <Col>
                <Text style={{ margin: "12px 12px" }}>{infouser.name}</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text strong>Apellido:</Text>
              </Col>
              <Col>
                <Text style={{ margin: "12px 12px" }}>{infouser.surname}</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text strong>E-mail:</Text>
              </Col>
              <Col>
                <Text type="secondary" style={{ margin: "12px 12px" }}>
                  {infouser.email}
                </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text strong>Teléfono:</Text>
              </Col>
              <Col>
                <Text style={{ margin: "12px 12px" }}>{infouser.phone}</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text strong>Provincia:</Text>
              </Col>
              <Col>
                <Text style={{ margin: "12px 12px" }}>
                  {infouser.address?.provincia}
                </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text strong>Localidad:</Text>
              </Col>
              <Col>
                <Text style={{ margin: "12px 12px" }}>
                  {infouser.address?.localidad}
                </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text strong>Dirección:</Text>
                <Text
                  className={style.dataaddres}
                  style={{ margin: "12px 12px" }}
                >
                  {infouser.address
                    ? `Calle: ${infouser?.address.calle} Número: ${infouser?.address.numero} Dpto: ${infouser?.address.dpto} Entre Calles: ${infouser?.address.entreCalles} ${infouser?.address.localidad} Provincia: ${infouser?.address.provincia} C.P: ${infouser?.address.codigoPostal}`
                    : "No definido"}
                </Text>
              </Col>

            </Row>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default Profile;
