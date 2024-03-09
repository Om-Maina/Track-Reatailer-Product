export const styles = {
  container: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.1)",
    zIndex: 999,
  },
  card: {
    width: 500,
    height: 280,
    background: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 48,
    height: 48,
    flexShrink: 0,
    marginBottom: 2,
  },
  text: {
    color: "#000",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "normal",
    marginTop: 2,
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 4,
    width: "100%",
  },
  cancelButton: {
    width: "48%",
    height: 56,
    flexShrink: 0,
    borderRadius: 4,
    background: "#FFF",
  },
  logoutButton: {
    width: "48%",
    height: 56,
    flexShrink: 0,
    borderRadius: 4,
    border: "1px solid #0078D4",
    background: "#0078D4",
    color: "#FFF",
  },
};